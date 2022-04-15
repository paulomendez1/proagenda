using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ProAgendaCore.DTOs;
using ProAgendaCore.Entities;
using ProAgendaCore.Entities.CustomEntities;
using ProAgendaCore.Interfaces;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly IFileStorageService _fileStorageService;
        private readonly IUnitOfWork _unitOfWork;

        public AccountController(UserManager<IdentityUser> userManager,
                                 SignInManager<IdentityUser> signInManager,
                                 IConfiguration configuration,
                                 IFileStorageService fileStorageService,
                                 IUnitOfWork unitOfWork)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _fileStorageService = fileStorageService;
            _unitOfWork = unitOfWork;
    }

        [HttpPost("Register")]
        public async Task<ActionResult<AuthenticationResponse>> Register([FromForm] PatientDTO patientDTO)
        {
            if (patientDTO == null)
            {
                throw new ArgumentException(nameof(patientDTO));
            }
            var user = new IdentityUser { UserName = patientDTO.Email, Email = patientDTO.Email };
            var result = await _userManager.CreateAsync(user, patientDTO.Password);
            if (result.Succeeded)
            {
                var usuario = await _userManager.FindByEmailAsync(patientDTO.Email);

                var patient = new Patient
                {
                    Name = patientDTO.Name,
                    LastName = patientDTO.LastName,
                    UserId = usuario.Id
                };

                if (patientDTO.Avatar != null)
                {
                    patient.Avatar = await _fileStorageService.SaveFile("patients", patientDTO.Avatar);
                }
                await _unitOfWork.PatientRepository.Insert(patient);
                _unitOfWork.SaveChanges();
                
                return BuildToken(patientDTO);
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }


        [HttpPost("Login")]
        public async Task<ActionResult<AuthenticationResponse>> Login([FromForm] UserCredentials userCredentials)
        {
            var result = await _signInManager.PasswordSignInAsync(userCredentials.Email, userCredentials.Password, isPersistent:false, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                return BuildToken(userCredentials);
            }
            else
            {
                return BadRequest("Incorrect Login");
            }
        }


        [HttpGet("{email}")]
        public async Task<ActionResult<Patient>> GetUserData(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            var userInfo = await _unitOfWork.PatientRepository.GetPatientByUserId(user.Id);

            return userInfo;
        }

        private AuthenticationResponse BuildToken(UserCredentials userCredentials)
        {
            var claims = new List<Claim>()
            {
                new Claim("email", userCredentials.Email)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["keyjwt"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var expiration = DateTime.UtcNow.AddHours(1);

            var token = new JwtSecurityToken(issuer: null, audience: null, claims: claims, expires: expiration, signingCredentials: creds);

            return new AuthenticationResponse()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration
            };
        }
    }
}

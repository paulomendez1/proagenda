using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProAgendaCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAgendaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpecialtyController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public SpecialtyController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [Produces("application/json",
                 "application/vnd.paulo.hateoas+json")]
        [HttpGet(Name = "GetSpecialties")]
        public async Task<IActionResult> GetSpecialties()
        {
            var specialties = await _unitOfWork.SpecialtyRepository.GetAll();
            return Ok(specialties);
        }

        [Produces("application/json",
              "application/vnd.paulo.hateoas+json")]
        [HttpGet("{id}/doctors", Name = "GetDoctorsBySpecialty")]
        public async Task<IActionResult> GetDoctorsBySpecialty(int id)
        {
            var doctors = await _unitOfWork.DoctorRepository.GetDoctorBySpeciality(id);
            return Ok(doctors);
        }

        [Produces("application/json",
       "application/vnd.paulo.hateoas+json")]
        [HttpGet("{id}", Name = "GetSpecialtyById")]
        public async Task<IActionResult> GetSpecialtyById(int id)
        {
            var specialty = await _unitOfWork.SpecialtyRepository.GetById(id);
            return Ok(specialty);
        }



    }
}

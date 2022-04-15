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
    public class DoctorController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public DoctorController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [Produces("application/json",
          "application/vnd.paulo.hateoas+json")]
        [HttpGet("{id}", Name = "GetDoctorById")]
        public async Task<IActionResult> GetDoctorById(int id)
        {
            var doctor = await _unitOfWork.DoctorRepository.GetById(id);
            return Ok(doctor);
        }

        [Produces("application/json",
       "application/vnd.paulo.hateoas+json")]
        [HttpGet("{id}/workinghours", Name = "GetWorkingHoursByDoctor")]
        public async Task<IActionResult> GetWorkingHoursByDoctor(int id)
        {
            var doctors = await _unitOfWork.WorkingHoursRepository.GetWorkingHoursByDoctor(id);
            return Ok(doctors);
        }


    }
}

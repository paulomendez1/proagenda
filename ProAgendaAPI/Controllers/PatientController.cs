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
    public class PatientController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public PatientController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [Produces("application/json",
          "application/vnd.paulo.hateoas+json")]
        [HttpGet("{id}", Name = "GetPatientById")]
        public async Task<IActionResult> GetPatientById(int id)
        {
            var patient = await _unitOfWork.PatientRepository.GetById(id);
            return Ok(patient);
        }
    }
}

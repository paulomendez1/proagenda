using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProAgendaCore.DTOs;
using ProAgendaCore.Entities;
using ProAgendaCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAgendaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {

        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AppointmentController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }


        [HttpPost("Register")]
        public async Task<ActionResult> RegisterAppointment([FromForm] AppointmentDTO appointmentDTO)
        {
            if (appointmentDTO == null)
            {
                throw new ArgumentException(nameof(appointmentDTO));
            }
            appointmentDTO.Time = appointmentDTO.Time.AddHours(-3);
            var result = await _unitOfWork.AppointmentRepository.GetAppointmentByDateAndDoctor(appointmentDTO.Time, appointmentDTO.DoctorId);
            if(result != null)
            {
                return BadRequest("Ya hay un turno reservado en ese horario, por favor escoje otro!");
            }
            var appointmentEntity = _mapper.Map<Appointment>(appointmentDTO);
            await _unitOfWork.AppointmentRepository.Insert(appointmentEntity);
            await _unitOfWork.SaveChangesAsync();
            var appointmentToReturn = _mapper.Map<AppointmentDTO>(appointmentEntity);

            return Ok(appointmentToReturn);
        }


        [Produces("application/json",
                 "application/vnd.paulo.hateoas+json")]
        [HttpGet("{patientId}", Name = "GetAppointmentByPatient")]
        public async Task<IActionResult> GetAppointmentByPatient(int patientId)
        {
            var appointments = await _unitOfWork.AppointmentRepository.GetAppointmentsByPatient(patientId);
            return Ok(appointments);
        }

    }
}

using AutoMapper;
using ProAgendaCore.DTOs;
using ProAgendaCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaInfrastructure.Profiles
{
    public class AppointmentProfile : AutoMapper.Profile
    {
        public AppointmentProfile()
        {
            CreateMap<Appointment, AppointmentDTO>().ReverseMap();
        }
    }
}

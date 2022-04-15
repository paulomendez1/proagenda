using ProAgendaCore.DTOs;
using ProAgendaCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaInfrastructure.Profiles
{
    public class PatientProfile : AutoMapper.Profile
    {
        public PatientProfile()
        {
            CreateMap<Patient, PatientDTO>()
                .ForMember(x => x.Avatar, options => options.Ignore());
            CreateMap<PatientDTO, Patient>();
        }
    }
}

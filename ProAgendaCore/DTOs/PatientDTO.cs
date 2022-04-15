﻿using Microsoft.AspNetCore.Http;
using ProAgendaCore.Entities.CustomEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaCore.DTOs
{
    public class PatientDTO : UserCredentials
    {

        public string Name { get; set; }
        public string LastName { get; set; }
        public IFormFile Avatar { get; set; }

    }
}

using Microsoft.AspNetCore.Identity;
using ProAgendaCore.Entities.CustomEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace ProAgendaCore.Entities
{
    public partial class Appointment : BaseEntity
    {
        [ForeignKey("DoctorId")]
        public virtual Doctor Doctor { get; set; }
        public int DoctorId { get; set; }
        [ForeignKey("PatientId")]
        public virtual Patient Patient { get; set; }
        public int PatientId { get; set; }
        [Required]
        public DateTime? Time { get; set; }


    }
}

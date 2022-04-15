
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace ProAgendaCore.Entities
{
    public partial class Doctor: Profile
    {
        public Doctor()
        {
            Appointments = new HashSet<Appointment>();
        }

        public string Avatar { get; set; }

        [ForeignKey("SpecialtyId")]
        public virtual Specialty Specialty { get; set; }
        public int? SpecialtyId { get; set; }
      

     
        public virtual ICollection<Appointment> Appointments { get; set; }
    }
}

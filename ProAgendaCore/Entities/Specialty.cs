
using ProAgendaCore.Entities.CustomEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace ProAgendaCore.Entities
{
    public partial class Specialty : BaseEntity
    {
        public Specialty()
        {
            Doctors = new HashSet<Doctor>();
        }
        [Required]
        public string Name { get; set; }

        public virtual ICollection<Doctor> Doctors { get; set; }
    }
}

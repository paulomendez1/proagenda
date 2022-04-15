using ProAgendaCore.Entities.CustomEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaCore.Entities
{
    public class WorkingHours : BaseEntity
    {
        [ForeignKey("DoctorId")]
        public virtual Doctor Doctor { get; set; }
        public int DoctorId { get; set; }
        public int StartHour { get; set; }
        public int EndHour { get; set; }
    }
}

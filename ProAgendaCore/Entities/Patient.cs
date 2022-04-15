using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaCore.Entities
{
    public class Patient : Profile
    {
        public Patient()
        {
            Appointments = new HashSet<Appointment>();
        }

        public string Avatar { get; set; }

        public virtual ICollection<Appointment> Appointments { get; set; }

    }
}

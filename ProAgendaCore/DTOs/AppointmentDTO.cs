using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaCore.DTOs
{
    public class AppointmentDTO
    {
        public int DoctorId { get; set; }
        public int PatientId { get; set; }
        public DateTime Time { get; set; }
    }
}

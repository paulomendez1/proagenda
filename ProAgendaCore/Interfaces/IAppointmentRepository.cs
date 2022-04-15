using ProAgendaCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaCore.Interfaces
{
    public interface IAppointmentRepository : IBaseRepository<Appointment>
    {
        Task<Appointment> GetAppointmentByDateAndDoctor(DateTime date, int doctorId);
        Task<IEnumerable<Appointment>> GetAppointmentsByPatient(int patientId);
    }
}

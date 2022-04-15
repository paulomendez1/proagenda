using ProAgendaCore.Entities;
using ProAgendaCore.Interfaces;
using ProAgendaInfrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaInfrastructure.Repositories
{
    class AppointmentRepository : BaseRepository<Appointment>, IAppointmentRepository
    {
        public AppointmentRepository(ProAgendaContext context) : base(context) { }

        public async Task<Appointment> GetAppointmentByDateAndDoctor(DateTime date, int doctorId)
        {
            return _entities.Where(x => x.Time == date && x.DoctorId==doctorId).FirstOrDefault();
        }

        public async Task<IEnumerable<Appointment>> GetAppointmentsByPatient(int patientId)
        {
            return _entities.Where(x => x.PatientId == patientId).ToList();
        }
    }
}

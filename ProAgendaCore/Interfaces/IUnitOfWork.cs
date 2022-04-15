using ProAgendaCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaCore.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IDoctorRepository DoctorRepository { get; }
        IPatientRepository PatientRepository { get; }
        IWorkingHoursRepository WorkingHoursRepository { get; }
        IBaseRepository<Specialty> SpecialtyRepository { get; }
       IAppointmentRepository AppointmentRepository { get; }


        void SaveChanges();
        Task SaveChangesAsync();
    }
}

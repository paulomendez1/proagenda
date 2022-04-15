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
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ProAgendaContext _context;
        private readonly IDoctorRepository  _doctorRepository;
        private readonly IBaseRepository<Specialty> _specialtyRepository;
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly IPatientRepository _patientRepository;
        private readonly IWorkingHoursRepository _workingHoursRepository;

        public UnitOfWork(ProAgendaContext context)
        {
            _context = context;
        }
        public IDoctorRepository DoctorRepository => _doctorRepository ?? new DoctorRepository(_context);
        public IBaseRepository<Specialty> SpecialtyRepository => _specialtyRepository ?? new BaseRepository<Specialty>(_context);
        public IAppointmentRepository AppointmentRepository => _appointmentRepository ?? new AppointmentRepository(_context);
        public IPatientRepository PatientRepository => _patientRepository ?? new PatientRepository(_context);
        public IWorkingHoursRepository WorkingHoursRepository => _workingHoursRepository ?? new WorkingHoursRepository(_context);
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (_context != null)
                {
                    _context.Dispose();
                }
            }
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}

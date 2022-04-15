using ProAgendaCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaCore.Interfaces
{
    public interface IDoctorRepository : IBaseRepository<Doctor>
    {
        Task<IEnumerable<Doctor>> GetDoctorBySpeciality(int id); 
    }
}

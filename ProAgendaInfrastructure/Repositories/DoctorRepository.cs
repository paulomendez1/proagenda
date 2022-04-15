using Microsoft.EntityFrameworkCore;
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
    public class DoctorRepository : BaseRepository<Doctor>, IDoctorRepository
    {
        public DoctorRepository(ProAgendaContext context) : base(context) { }

        public async Task<IEnumerable<Doctor>> GetDoctorBySpeciality(int id)
        {
            return await _entities.Where(x => x.SpecialtyId == id).ToListAsync();
        }
    }
}

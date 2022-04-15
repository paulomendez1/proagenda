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
    public class WorkingHoursRepository : BaseRepository<WorkingHours>, IWorkingHoursRepository
    {
        public WorkingHoursRepository(ProAgendaContext context) : base(context) { }
        public async Task<IEnumerable<WorkingHours>> GetWorkingHoursByDoctor(int id)
        {
            return await _entities.Where(x => x.DoctorId == id).ToListAsync();
        }
    }
}

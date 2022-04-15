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
    public class PatientRepository : BaseRepository<Patient>, IPatientRepository
    {
        public PatientRepository(ProAgendaContext context) : base(context) { }
        public async Task<Patient> GetPatientByUserId(string id)
        {
            var collection = _entities as IQueryable<Patient>;
            var patient = collection.Where(x => x.UserId == id);
            return patient.FirstOrDefault();
        }
    }
}

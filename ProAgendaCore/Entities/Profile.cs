using Microsoft.AspNetCore.Identity;
using ProAgendaCore.Entities.CustomEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaCore.Entities
{
    public class Profile : BaseEntity
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        [ForeignKey("UserId")]
        public virtual IdentityUser User { get; set; }
        public string UserId { get; set; }
    }
}

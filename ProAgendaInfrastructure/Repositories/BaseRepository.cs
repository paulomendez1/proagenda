﻿using Microsoft.EntityFrameworkCore;
using ProAgendaCore.Entities.CustomEntities;
using ProAgendaCore.Interfaces;
using ProAgendaInfrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAgendaInfrastructure.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        private readonly ProAgendaContext _context;
        protected DbSet<T> _entities;
        public BaseRepository(ProAgendaContext context)
        {
            _context = context;
            _entities = context.Set<T>();
        }
        public async Task<IEnumerable<T>> GetAll()
        {
            return await _entities.ToListAsync();
        }

        public async Task<T> GetById(int id)
        {
            return await _entities.FindAsync(id);
        }

        public async Task Insert(T entity)
        {
            await _entities.AddAsync(entity);
        }

        public async Task Update(T entity)
        {
            _entities.Update(entity);
        }

        public async Task Delete(int id)
        {
            T Entity = await GetById(id);
            _entities.Remove(Entity);

        }
    
    }
}

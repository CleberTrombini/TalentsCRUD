using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using TalentsCRUD.Data.DataContext;
using TalentsCRUD.Models;

namespace TalentsCRUD.Services.Vagas
{
    public class VagaService : IVagaService
    {
        private readonly AppDataContext _context;

        public VagaService(AppDataContext context)
        {
            _context = context;
        }

        public void Add(Vaga model)
        {
            _context.Vagas.Add(model);
            _context.SaveChanges();
        }

        public IEnumerable<Vaga> GetAll()
        {
            return _context.Vagas.ToList();
        }

        public Vaga GetById(int Id)
        {
            var result = _context.Vagas.Where(c => c.VagaId == Id).FirstOrDefault();

            if (result==null)
                throw new System.Exception("Record not found");

            return result;
        }

        public void Remove(int Id)
        {
            var itemToRemove = _context.Vagas.First(c => c.VagaId == Id);
            if (itemToRemove != null)
            {
                _context.Vagas.Remove(itemToRemove);
                _context.SaveChanges();
            }
            else
            {
                throw new System.Exception("Record not found");
            }
        }

        public void Update(Vaga model)
        {
            if (model != null)
            {
                _context.Entry<Vaga>(model).State = EntityState.Modified;
                _context.SaveChanges();
            }
        }

        public void DisposeContext()
        {
            _context.Dispose();
        }
    }
}

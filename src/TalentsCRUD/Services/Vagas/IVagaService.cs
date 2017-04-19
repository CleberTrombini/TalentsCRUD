using System.Collections.Generic;
using TalentsCRUD.Models;

namespace TalentsCRUD.Services.Vagas
{
    public interface IVagaService
    {
        void Add(Vaga model);
        IEnumerable<Vaga> GetAll();
        Vaga GetById(int Id);
        void Remove(int Id);
        void Update(Vaga model);
        void DisposeContext();
    }
}

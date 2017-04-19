using System.Collections.Generic;
using TalentsCRUD.Models;
using TalentsCRUD.Models.ViewModels;

namespace TalentsCRUD.Services.Candidatos
{
    public interface ICandidatoService
    {
        void Add(CandidatoViewModel model);
        IEnumerable<CandidatoViewModel> GetAll();
        CandidatoViewModel GetById(int Id);
        void Remove(int Id);
        void Update(CandidatoViewModel model);
        void DisposeContext();
    }
}

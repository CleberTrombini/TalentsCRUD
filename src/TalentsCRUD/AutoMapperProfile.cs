using AutoMapper;
using TalentsCRUD.Models;
using TalentsCRUD.Models.ViewModels;
using System.Collections.Generic;

namespace TalentsCRUD
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            // Add as many of these lines as you need to map your objects
            CreateMap<Vaga, VagaViewModel>();
            CreateMap<VagaViewModel, Vaga>();

            CreateMap<Candidato, CandidatoViewModel>();
            CreateMap<CandidatoViewModel, Candidato>();
            CreateMap<Candidato, IEnumerable<CandidatoViewModel>>();
        }
    }
}

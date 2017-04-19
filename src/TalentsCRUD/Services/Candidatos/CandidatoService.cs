using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using TalentsCRUD.Data.DataContext;
using TalentsCRUD.Models;
using TalentsCRUD.Models.ViewModels;

namespace TalentsCRUD.Services.Candidatos
{
    public class CandidatoService : ICandidatoService
    {
        private readonly AppDataContext _context;
        private readonly IMapper _mapper;

        public CandidatoService(AppDataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void Add(CandidatoViewModel model)
        {
            if (model!=null)
            {
                var candidatos = _mapper.Map<Candidato>(model);

                _context.Candidatos.Add(candidatos);

                foreach (var vaga in model.VagasParaCandidato)
                {
                    var vagaparacandidato = _context.Vagas
                                .Where(v => v.VagaId == vaga.VagaId && vaga.selecionado == true)
                                .FirstOrDefault();
                    if (vagaparacandidato != null)
                        _context.VagasCandidato.Add(new VagaCandidato
                        {
                            CandidatoId = candidatos.CanditadoId,
                            VagaId = vagaparacandidato.VagaId
                        });
                }

                _context.SaveChanges();
            }
            else
            {
                throw new System.Exception("Record not found");
            }
        }

        public void Update(CandidatoViewModel model)
        {
            if (model != null)
            {
                var candidatos = _mapper.Map<Candidato>(model);

                _context.Entry<Candidato>(candidatos).State = EntityState.Modified;

                var vagaLista = _context.VagasCandidato.Where(x => x.CandidatoId == model.CanditadoId);
                if (vagaLista != null)
                    _context.VagasCandidato.RemoveRange(vagaLista);

                _context.SaveChanges();

                foreach (var vaga in model.VagasParaCandidato)
                {
                    var vagaparacandidato = _context.Vagas
                                .Where(v => v.VagaId == vaga.VagaId && vaga.selecionado == true)
                                .FirstOrDefault();
                    if (vagaparacandidato != null)
                        _context.VagasCandidato.Add(new VagaCandidato
                        {
                            CandidatoId = candidatos.CanditadoId,
                            VagaId = vagaparacandidato.VagaId
                        });
                }

                _context.SaveChanges();
            }
            else
            {
                throw new System.Exception("Record not found");
            }
        }

        public IEnumerable<CandidatoViewModel> GetAll()
        {
            var candidatos = _context.Candidatos.Include(x => x.VagasCandidato).ToList();

            var vagas = _context.VagasCandidato.Include(i => i.Vagas).Where(x => x.CandidatoId == x.Candidatos.CanditadoId).ToList();

            List<CandidatoViewModel> candidatovm = new List<CandidatoViewModel>();

            foreach (var candidato in candidatos)
            {
                List<VagaViewModel> vagasvm = new List<VagaViewModel>();

                foreach (var vaga in vagas)
                {
                    if (candidato.CanditadoId == vaga.CandidatoId)
                    {
                        vagasvm.Add(new VagaViewModel
                        {
                                VagaId = vaga.Vagas.VagaId,
                                Descricao = vaga.Vagas.Descricao
                        });
                    }
                }

                candidatovm.Add(new CandidatoViewModel
                {
                        CanditadoId = candidato.CanditadoId,
                        Nome = candidato.Nome,
                        Skype = candidato.Skype,
                        Telefone = candidato.Telefone,
                        Email = candidato.Email,
                        Linkedin = candidato.Linkedin,
                        Cidade = candidato.Cidade,
                        Estado = candidato.Estado,
                        PretencaoSalario = candidato.PretencaoSalario,
                        PretencaoSalarioHora = candidato.PretencaoSalarioHora,
                        NivelCSharp = candidato.NivelCSharp,
                        NivelAspNetMvc = candidato.NivelAspNetMvc,
                        NivelAngularJs = candidato.NivelAngularJs,
                        NivelJquery = candidato.NivelJquery,
                        NivelBootstrap = candidato.NivelBootstrap,
                        NivelWordpress = candidato.NivelWordpress,
                        NivelPhp = candidato.NivelPhp,
                        NivelAndroid = candidato.NivelAndroid,
                        NivelIos = candidato.NivelIos,
                        NivelIonic = candidato.NivelIonic,
                        Portifolio = candidato.Portifolio,
                        ConhecimentoLinguagens = candidato.ConhecimentoLinguagens,
                        ConhecimentoSGC = candidato.ConhecimentoSGC,
                        AreaInteresse = candidato.AreaInteresse,
                        HorasDisponivel = candidato.HorasDisponivel,
                        HorarioDisponivel = candidato.HorarioDisponivel,
                        InformacaoBancaria = candidato.InformacaoBancaria,
                        ComentarioAdicional = candidato.ComentarioAdicional,
                        VagasParaCandidato = new List<VagaViewModel>(vagasvm)
                });
            }
            return candidatovm;
        }

        public CandidatoViewModel GetById(int Id)
        {
            var candidatos = _context.Candidatos.Where(x => x.CanditadoId == Id).Include(x => x.VagasCandidato).ToList();

            var vagas = _context.VagasCandidato.Include(i => i.Vagas).Where(x => x.CandidatoId == x.Candidatos.CanditadoId).ToList();

            CandidatoViewModel candidatovm = new CandidatoViewModel();

            foreach (var candidato in candidatos)
            {
                List<VagaViewModel> vagasvm = new List<VagaViewModel>();

                foreach (var vaga in vagas)
                {
                    if (candidato.CanditadoId == vaga.CandidatoId)
                    {
                        vagasvm.Add(new VagaViewModel
                        {
                            VagaId = vaga.Vagas.VagaId,
                            Descricao = vaga.Vagas.Descricao
                        });
                    }
                }

                candidatovm = new CandidatoViewModel
                {
                    CanditadoId = candidato.CanditadoId,
                    Nome = candidato.Nome,
                    Skype = candidato.Skype,
                    Telefone = candidato.Telefone,
                    Email = candidato.Email,
                    Linkedin = candidato.Linkedin,
                    Cidade = candidato.Cidade,
                    Estado = candidato.Estado,
                    PretencaoSalario = candidato.PretencaoSalario,
                    PretencaoSalarioHora = candidato.PretencaoSalarioHora,
                    NivelCSharp = candidato.NivelCSharp,
                    NivelAspNetMvc = candidato.NivelAspNetMvc,
                    NivelAngularJs = candidato.NivelAngularJs,
                    NivelJquery = candidato.NivelJquery,
                    NivelBootstrap = candidato.NivelBootstrap,
                    NivelWordpress = candidato.NivelWordpress,
                    NivelPhp = candidato.NivelPhp,
                    NivelAndroid = candidato.NivelAndroid,
                    NivelIos = candidato.NivelIos,
                    NivelIonic = candidato.NivelIonic,
                    Portifolio = candidato.Portifolio,
                    ConhecimentoLinguagens = candidato.ConhecimentoLinguagens,
                    ConhecimentoSGC = candidato.ConhecimentoSGC,
                    AreaInteresse = candidato.AreaInteresse,
                    HorasDisponivel = candidato.HorasDisponivel,
                    HorarioDisponivel = candidato.HorarioDisponivel,
                    InformacaoBancaria = candidato.InformacaoBancaria,
                    ComentarioAdicional = candidato.ComentarioAdicional,
                    VagasParaCandidato = new List<VagaViewModel>(vagasvm)
                };
            }
            return candidatovm;
        }

        public void Remove(int Id)
        {
            var itemToRemove = _context.Candidatos.Include(x => x.VagasCandidato).First(c => c.CanditadoId == Id);
            if (itemToRemove != null)
            {
                _context.Remove(itemToRemove);
                _context.SaveChanges();
            }
            else
            {
                throw new System.Exception("Record not found");
            }                
        }

        public void DisposeContext()
        {
            _context.Dispose();
        }
    }
}

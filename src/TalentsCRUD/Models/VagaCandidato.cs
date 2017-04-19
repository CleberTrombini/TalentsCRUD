using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TalentsCRUD.Models
{
    public class VagaCandidato
    {
        public int CandidatoId { get; set; }
        public Candidato Candidatos { get; set; }

        public int VagaId { get; set; }
        public Vaga Vagas { get; set; }

    }
}

using System.Collections.Generic;

namespace TalentsCRUD.Models
{
    public class Vaga
    {
        public int VagaId { get; set; }
        public string Descricao { get; set; }

        public virtual List<VagaCandidato> VagasCandidato { get; set; }
    }
}

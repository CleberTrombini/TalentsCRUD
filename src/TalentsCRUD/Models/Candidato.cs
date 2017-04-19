using System.Collections.Generic;

namespace TalentsCRUD.Models
{
    public class Candidato
    {
        public int CanditadoId { get; set; }
        public string Nome { get; set; }
        public string Skype { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public string Linkedin { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public decimal PretencaoSalario { get; set; }
        public decimal PretencaoSalarioHora { get; set; }
        public int NivelCSharp { get; set; }
        public int NivelAspNetMvc { get; set; }
        public int NivelAngularJs { get; set; }
        public int NivelJquery { get; set; }
        public int NivelBootstrap { get; set; }
        public int NivelWordpress { get; set; }
        public int NivelPhp { get; set; }
        public int NivelAndroid { get; set; }
        public int NivelIos { get; set; }
        public int NivelIonic { get; set; }
        public string Portifolio { get; set; }
        public string ConhecimentoLinguagens { get; set; }
        public string ConhecimentoSGC { get; set; }
        public string AreaInteresse { get; set; }
        public int HorasDisponivel { get; set; }
        public string HorarioDisponivel { get; set; }
        public string InformacaoBancaria { get; set; }
        public string ComentarioAdicional { get; set; }

        public virtual List<VagaCandidato> VagasCandidato { get; set; }
    }
}

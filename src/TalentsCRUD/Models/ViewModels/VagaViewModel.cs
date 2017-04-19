using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TalentsCRUD.Models.ViewModels
{
    public class VagaViewModel
    {
        public int VagaId { get; set; }
        public string Descricao { get; set; }
        public Boolean selecionado { get; set; }
    }
}

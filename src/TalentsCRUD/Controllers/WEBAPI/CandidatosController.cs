using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TalentsCRUD.Models.ViewModels;
using TalentsCRUD.Services.Candidatos;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TalentsCRUD.Controllers.WEBAPI
{
    [Route("api/[controller]")]
    public class CandidatosController : Controller
    {
        private ICandidatoService _service;
        private IMapper _mapper;

        public CandidatosController(ICandidatoService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        // GET: api/candidatos
        [HttpGet]
        public IEnumerable<CandidatoViewModel> GetAll()
        {
            return _service.GetAll();
        }

        // GET api/candidatos/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var candidato = _service.GetById(id);
            if (candidato == null)
            {
                return NotFound();
            }

            return new OkObjectResult(candidato);
        }

        // POST api/candidatos
        [HttpPost]
        public IActionResult Post([FromBody]CandidatoViewModel candidatos)
        {
            if (candidatos == null)
                return BadRequest();

            candidatos.CanditadoId = 0;

            try
            {
                _service.Add(candidatos);
                return new OkObjectResult(candidatos);
            }
            catch (System.Exception)
            {
                return BadRequest();
            }
        }

        // PUT api/candidatos/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody]CandidatoViewModel candidato)
        {
            if (candidato == null || candidato.CanditadoId != id)
                return BadRequest();

            try
            {
                _service.Update(candidato);
                return new OkObjectResult(_mapper.Map<CandidatoViewModel>(candidato));
            }
            catch (System.Exception)
            {
                return NotFound(candidato);
            }
        }

        // DELETE api/candidatos/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _service.Remove(id);
                return new OkResult();

            }
            catch (System.Exception)
            {

                return NotFound();
            }
        }
    }
}

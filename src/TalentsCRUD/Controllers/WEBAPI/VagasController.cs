using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TalentsCRUD.Models;
using TalentsCRUD.Models.ViewModels;
using TalentsCRUD.Services.Vagas;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TalentsCRUD.Controllers.WEBAPI
{
    [Route("api/[controller]")]
    public class VagasController : Controller
    {
        private IVagaService _service;
        private IMapper _mapper;

        public VagasController(IVagaService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        // GET: api/vagas
        [HttpGet]
        public IEnumerable<VagaViewModel> GetAll()
        {
            var vagas = _service.GetAll();

            return _mapper.Map<IEnumerable<VagaViewModel>>(vagas);
        }

        // GET api/vagas/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var vaga = _service.GetById(id);
            if (vaga == null)
            {
                return NotFound();
            }

            return new OkObjectResult(_mapper.Map<VagaViewModel>(vaga));
        }

        // POST api/vagas
        [HttpPost]
        public IActionResult Post([FromBody]VagaViewModel vagas)
        {
            if (vagas == null)
                return BadRequest();

            vagas.VagaId = 0;

            try
            {
                var mapvaga = _mapper.Map<Vaga>(vagas);
                _service.Add(mapvaga);
                return new OkObjectResult(_mapper.Map<VagaViewModel>(mapvaga));
            }
            catch (System.Exception)
            {
                return BadRequest();
            }
        }

        // PUT api/vagas/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody]VagaViewModel vaga)
        {
            if (vaga == null || vaga.VagaId != id)
            {
                return BadRequest();
            }

            try
            {
                var mapvaga = _mapper.Map<Vaga>(vaga);
                _service.Update(mapvaga);
                return new OkObjectResult(_mapper.Map<VagaViewModel>(mapvaga));
            }
            catch (System.Exception)
            {

                return NotFound(vaga);
            }
        }

        // DELETE api/vagas/5
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

using GerenciamentoHotel.shared.DTO;
using Back.API.Model;
using Back.API.Service;
using Microsoft.AspNetCore.Mvc;


namespace Back.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuartoController : ControllerBase
    {
        private readonly IQuartoService _service;

        public QuartoController(IQuartoService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Criar([FromBody] QuartoDTO dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _service.AdicionarQuartoAsync(dto);
            return Ok(dto);
        }

        [HttpGet]
        public async Task<IEnumerable<Quarto>> BuscarTodosAsync()
        {
            return await _service.ListarAsync();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> ApagarQuarto([FromRoute] int id)
        {
            if (id <= 0)
            {
                return BadRequest("O ID do quarto precisa ser válido.");
            }
            await _service.DeletarQuartoAsync(id);
            return Ok(id);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> AtualizarInfo([FromRoute]int id, [FromBody]QuartoDTO dto)
        {
            if (id <= 0)
            {
                throw new ArgumentException("O ID do quarto precisa ser válido", nameof(id));
            }
            await _service.AtualizarQuartoAsync(id, dto);
            return Ok(dto);
        }
    }
}
using GerenciamentoHotel.shared.DTO;
using Back.API.Model;
using Back.API.Service;
using Microsoft.AspNetCore.Mvc;

namespace Back.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReservaController : ControllerBase
    {
        private readonly IReservaService _service;

        public ReservaController(IReservaService service)
        {
            _service = service;
        }

        [HttpPost("/nova-reserva/{Quarto_ID_FK}")]
        public async Task<IActionResult> NovaReservaAsync([FromBody] ReservaDTO dto, [FromRoute] int Quarto_ID_FK)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _service.ReservarQuartoAsync(dto, Quarto_ID_FK);
            return Ok(dto);
        }

        [HttpGet("/buscar-reservas")]
        public async Task<List<ReservaReadDTO>> BuscarTodosAsync()
        {
            return await _service.BuscarTodosAsync();
        }
        
        [HttpGet("/buscar-por-id/{id}")]
        public async Task<IActionResult> BuscarPorIdAsync(int id)
        {
            var ReservaID = await _service.BuscarPorIdAsync(id);
            return Ok(ReservaID);
        }
        [HttpPut("/atualizar-reserva/{Id}")]
        public async Task<IActionResult> AtualizarReserva([FromRoute]int Id, ReservaDTO dto)
        {
            var AtualizarReserva = await _service.AtualizarAsync(Id, dto);
            return Ok(AtualizarReserva);
        }

    }
}
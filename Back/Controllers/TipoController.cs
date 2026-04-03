using GerenciamentoHotel.shared.DTO;
using Back.API.Service;
using Microsoft.AspNetCore.Mvc;
using Shared.DTO;

namespace Back.API.Controllers
{
    [Route("api/[controller]")]
    public class TipoController : ControllerBase
    {

        private readonly ITipoService _service;
        public TipoController(ITipoService service )
        {
            _service = service;
        }
        [HttpPost]
        public async Task<IActionResult> CriarTipo([FromBody] TipoDTO dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _service.CriarAsync(dto);
            return Ok(dto);
        }
    }
}
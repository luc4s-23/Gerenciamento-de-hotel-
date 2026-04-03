using GerenciamentoHotel.shared.DTO;
using Back.API.Service;
using Microsoft.AspNetCore.Mvc;
using Back.API.Data;
using Shared.DTO;


namespace Back.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UusuarioController : ControllerBase
    {
        private readonly IUsuarioService _service;

        public UusuarioController(IUsuarioService service, AppDbContext context)
        {
            _service = service;
        }

        [HttpPost("/novo-usuario")]
        public async Task<IActionResult> NovoUsuarioAsync([FromBody] UsuarioDTO dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            await _service.CriarUsuarioAsync(dto);
            return Ok(dto);
        }

        [HttpGet("/listar-usuarios")]
        public async Task<List<UsuarioDTO>> ListarTodosUsuarios()
        {
            return await _service.BuscarTodosAsync();
        }
    }
}
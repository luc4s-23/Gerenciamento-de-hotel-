using Back.API.Model;
using GerenciamentoHotel.shared.DTO;
using Shared.DTO;

namespace Back.API.Service
{
    public interface IUsuarioService
    {
        Task<List<UsuarioDTO>> BuscarTodosAsync();
        Task<UsuarioDTO> BuscarPorIdAsync(int id);
        Task<Usuario> CriarUsuarioAsync(UsuarioDTO dto);
        Task DeletarPorIdAsync(UsuarioDTO dto);
        Task AtualizarAsync(UsuarioDTO dto, int id);
    }
}
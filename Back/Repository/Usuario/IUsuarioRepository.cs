using Back.API.Model;

namespace Back.API
{
    public interface IUsuarioRepository
    {
        Task CriarAsync(Usuario usuario);
        Task DeletarAsync(Usuario usuario);
        Task AtualizarAsync(Usuario usuario);
        Task<Usuario?> BuscarPorIdAsync(Usuario usuario);
        Task<IEnumerable<Usuario>> ListarTodosAsync();
    }
}
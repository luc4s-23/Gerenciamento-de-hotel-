using Back.API.Model;
using Back.API.DTO;
using Back.API.Data;

namespace Back.API
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly AppDbContext _context;

        public UsuarioRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task AtualizarAsync(Usuario usuario)
        {
            throw new NotImplementedException();
        }

        public async Task<Usuario?> BuscarPorIdAsync(Usuario usuario)
        {
            throw new NotImplementedException();
        }

        public async Task CriarAsync(Usuario usuario)
        {
            _context.usuarios.AddAsync(usuario);
            await _context.SaveChangesAsync();
        }

        public async Task DeletarAsync(Usuario usuario)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Usuario>> ListarTodosAsync()
        {
            throw new NotImplementedException();
        }
    }
}
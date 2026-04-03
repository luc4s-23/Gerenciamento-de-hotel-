using Back.API.Model;
using Back.API.Data;

namespace Back.API.Repository
{

    public class TipoRepository : ITipoRepository
    {
        private readonly AppDbContext _context;

        public TipoRepository(AppDbContext context)
        {
            _context = context;
        }
        public Task<Tipo> Atualizar(Tipo tipo)
        {
            throw new NotImplementedException();
        }

        public async Task CriarAsync(Tipo tipo)
        {
            _context.tipos.AddAsync(tipo);
            await _context.SaveChangesAsync(); 
        }

        public Task<Tipo> DeletarAsync(Tipo tipo)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Tipo>> ListarTiposAsync()
        {
            throw new NotImplementedException();
        }
    }
}
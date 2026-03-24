using Back.API.DTO;
using Back.API.Model;

namespace Back.API.Repository
{
    public interface IQuartoRepository
    {
        Task<IEnumerable<QuartoDTO>> ListarTodosAsync();
        Task<Quarto?> BuscarPorIdAsync(int id);
        Task<Quarto?> BuscarPorNumero(string Numero_quarto);
        Task AdicionarAsync(Quarto quarto);
        Task AtualizarAsync(Quarto quarto);
        Task RemoverAsync(int id);
    }
}
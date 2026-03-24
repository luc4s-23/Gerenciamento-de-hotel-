// 1. Defina um alias (apelido) para a classe Quarto do Model
using Back.API.DTO;
using Back.API.Model; // Este using ainda é útil se você tiver outros tipos aqui.

// 2. Seu namespace permanece o mesmo para manter a organização
namespace Back.API.Service
{
    public interface IQuartoService
    {
        // 3. Use o alias 'QuartoModel' em vez do nome conflitante 'Quarto'
        Task AdicionarQuartoAsync(QuartoDTO dto);
        Task<IEnumerable<QuartoDTO>> ListarAsync();
        Task DeletarQuartoAsync(int id);
        Task<Quarto> BuscarPorIdAsync(int id);
        Task<Quarto> AtualizarQuartoAsync(int id, QuartoDTO dto);
        Task ValidarInfosQuarto(QuartoDTO quartoDTO);

    }
}
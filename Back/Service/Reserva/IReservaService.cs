using Back.API.Model;
using GerenciamentoHotel.shared.DTO;
using Shared.DTO;

namespace Back.API.Service
{
    public interface IReservaService
    {
        Task<List<ReservaReadDTO>> BuscarTodosAsync();
        Task<ReservaReadDTO> BuscarPorIdAsync(int id);
        Task<Reserva> ReservarQuartoAsync(ReservaDTO dto, int Quarto_ID_FK);
        Task<Reserva> AtualizarAsync(int id, ReservaDTO dto);
        Task DeletePorIdAsync(int id);
    }
}
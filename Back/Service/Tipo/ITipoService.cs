using GerenciamentoHotel.shared.DTO;
using Back.API.Model;
using Shared.DTO;


namespace Back.API.Service
{
    public interface ITipoService
    {
        Task<List<Tipo>> BuscarTiposAsync();
        Task<Tipo> CriarAsync(TipoDTO dto);
    }
}
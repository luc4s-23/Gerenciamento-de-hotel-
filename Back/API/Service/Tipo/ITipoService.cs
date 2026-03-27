using Back.API.DTO;
using Back.API.Model;


namespace Back.API.Service
{
    public interface ITipoService
    {
        Task<List<Tipo>> BuscarTiposAsync();
        Task<Tipo> CriarAsync(TipoDTO dto);
    }
}
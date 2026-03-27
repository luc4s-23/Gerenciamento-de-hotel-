using Back.API.Model;


namespace Back.API.Repository
{
    public interface ITipoRepository
    {
        Task CriarAsync(Tipo tipo);
        Task<IEnumerable<Tipo>> ListarTiposAsync();
        Task<Tipo> DeletarAsync(Tipo tipo);
        Task<Tipo> Atualizar(Tipo tipo);
    }
}
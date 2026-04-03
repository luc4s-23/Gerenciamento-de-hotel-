
using GerenciamentoHotel.shared.DTO;
using Back.API.Model;
using Back.API.Repository;

namespace Back.API.Service
{
    public class TipoService : ITipoService
    {
        private readonly ITipoRepository _repository;
        public TipoService(ITipoRepository repository)
        {
            _repository = repository;
        }
        public Task<List<Tipo>> BuscarTiposAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<Tipo> CriarAsync(TipoDTO dto)
        {
            var novoTipo = new Tipo
            {
                nomeTipo = dto.nomeTipo
            };
            await _repository.CriarAsync(novoTipo);
            return novoTipo;
        }
    }
}

using Back.API.Model;
using GerenciamentoHotel.shared.DTO;
using Back.API.Data;
using Microsoft.EntityFrameworkCore;
using Shared.DTO;

namespace Back.API.Service
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _repository;
        private readonly AppDbContext _context;

        public UsuarioService(IUsuarioRepository repository, AppDbContext context)
        {
            _repository = repository;
            _context = context;
        }
        public Task AtualizarAsync(UsuarioDTO dto, int id)
        {
            throw new NotImplementedException();
        }

        public Task<UsuarioDTO> BuscarPorIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<UsuarioDTO>> BuscarTodosAsync()
        {
            return await _context.usuarios.Select(u => new UsuarioDTO
            {
                Nome = u.Nome,
                Email = u.Email,
                SenhaHash = u.SenhaHash,
                SenhaSalt = u.SenhaSalt,
                Nivel_Acesso = u.Nivel_Acesso,
                Ativo = u.Ativo
            }).ToListAsync();
        }

        public async Task<Usuario> CriarUsuarioAsync(UsuarioDTO dto)
        {
            if (dto == null) throw new ArgumentNullException(nameof(dto));

            if (dto.Email == null) throw new ArgumentNullException(nameof(dto.Email));

            if (dto.Nome == null) throw new ArgumentNullException(nameof(dto.Nome));

            if (dto.SenhaHash == null) throw new ArgumentNullException(nameof(dto.SenhaHash));

            var novoUsuario = new Usuario
            {
                Nome = dto.Nome,
                Email = dto.Email,
                SenhaHash = dto.SenhaHash,
                SenhaSalt = dto.SenhaSalt,
                Nivel_Acesso = dto.Nivel_Acesso,
                Ativo = dto.Ativo
            };
            //metodo para buscar e verificar se já existe esse usuario

            await _repository.CriarAsync(novoUsuario);
            return novoUsuario;
        }
        public Task DeletarPorIdAsync(UsuarioDTO dto)
        {
            throw new NotImplementedException();
        }
        //==================


    }
}
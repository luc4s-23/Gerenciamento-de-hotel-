

namespace Back.API.DTO
{
    public class UsuarioDTO
    {
        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;

        // VARBINARY(MAX) no SQL vira byte[] no C#
        public byte[] SenhaHash { get; set; } = new byte[0];  //Armazena a senha criptografada
        public byte[] SenhaSalt { get; set; } = new byte[0];  //Chave de segurança da criptografia

        public int Nivel_Acesso { get; set; } // 0: Funcionario, 1: Admin
        public bool Ativo { get; set; } = true; //Permite desativar um funcionário que saiu
    }
}
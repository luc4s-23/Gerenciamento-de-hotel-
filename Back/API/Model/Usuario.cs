using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hoteis.API.Model
{
    public class Usuario
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;

        // VARBINARY(MAX) no SQL vira byte[] no C#
        public byte[] SenhaHash { get; set; } = new byte[0];  //Armazena a senha criptografada
        public byte[] SenhaSalt { get; set; } = new byte[0];  //Chave de segurança da criptografia

        public int Nivel_Acesso { get; set; } // 0: Funcionario, 1: Admin
        public bool Ativo { get; set; } = true; //Permite desativar um funcionário que saiu

    }
}
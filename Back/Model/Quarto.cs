using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using GerenciamentoHotel.shared.Enums;
using Microsoft.EntityFrameworkCore;

namespace Back.API.Model
{
    public class Quarto
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Isso avisa que o Azure gera o ID
        public int Id_quarto { get; set; }
        [Required]
        public string? Numero_quarto { get; set; }
        [Required]
        public TipoQuarto tipo { get; set; }
        [Required]
        public int Capacidade { get; set; }
        [Precision(10, 2)]
        [Required]
        [Range(0.00, double.MaxValue)]
        public decimal Preco_diaria { get; set; }
        public StatusQuarto Status { get; private set; } = StatusQuarto.Disponível;
        public string? Descricao { get; set; }


        public void Ocupar()
        {
            if (Status == StatusQuarto.Ocupado)
                throw new InvalidOperationException("Quarto já está ocupado.");

            Status = StatusQuarto.Ocupado;
        }

    }
}
using System.ComponentModel.DataAnnotations;
using GerenciamentoHotel.shared.Enums;

namespace Shared.DTO
{
    public class QuartoDTO
    {
        [Required]
        public string? Numero_quarto { get; set; }
        [Required]
        public TipoQuarto tipo { get; set; }
        [Required]
        public int? Capacidade { get; set; }
        [Required]
        [Range(0.00, double.MaxValue)]
        public decimal? Preco_diaria { get; set; }
        public string? Descricao { get; set; } = string.Empty;

    }
    
}
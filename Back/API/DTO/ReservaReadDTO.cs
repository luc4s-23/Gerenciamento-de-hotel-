
using static Back.API.Model.Reserva;

namespace Back.API.DTO
{
    public class ReservaReadDTO
    {
        public int IdReserva { get; set; }
        public string? Nome_hospede { get; set; }
        public DateTime DataCheckIn { get; set; }
        public string? Contato_hospede { get; set; }
        public string? Documento_hospede { get; set; }
        public int QuantidadeDiarias { get; set; }
        public string NumeroQuarto { get; set; }
        public DateTime DataCheckOut { get; set; }
        public decimal ValorTotal { get; set; }
        public StatusReserva Status { get; set; }
    }
}
namespace Back.API.DTO
{
    public class ReservaDTO
    {

        public string? Nome_hospede { get; set; }
        public DateTime DataCheckIn { get; set; }
        public string? Contato_hospede { get; set; }
        public string? Documento_hospede { get; set; }
        public int QuantidadeDiarias { get; set; }
        public int? Quantidade_hospedes { get; set; }

    }
}

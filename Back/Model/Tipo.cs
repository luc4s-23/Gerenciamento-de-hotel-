using System.ComponentModel.DataAnnotations;


namespace Back.API.Model
{
    public class Tipo
    {
        [Key]
        public int idTipo { get; set; }
        public string nomeTipo { get; set; }
        
    }
}
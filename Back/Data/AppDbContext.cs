using Back.API.Model;
using Microsoft.EntityFrameworkCore;


namespace Back.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Quarto> quartos { get; set; }
        public DbSet<Reserva> reservas { get; set; }
        public DbSet<Usuario> usuarios { get; set; }
        public DbSet<Tipo> tipos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Quarto>()
                .Property(q => q.Preco_diaria)
                .HasPrecision(18, 2);
                
            modelBuilder.Entity<Reserva>()
                .Property(r => r.ValorTotal)
                .HasPrecision(18, 2);
                
            modelBuilder.Entity<Reserva>()
                .HasOne(r => r.Quarto)
                .WithMany()
    .           HasForeignKey(r => r.Quarto_ID_FK);
        }
    }
}
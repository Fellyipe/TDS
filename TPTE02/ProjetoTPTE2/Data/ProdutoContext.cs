using Microsoft.EntityFrameworkCore;
using ProjetoTPTE2.Models;

namespace ProjetoTPTE2.Data
{
    public class ProdutoContext : DbContext
    {
        public ProdutoContext(DbContextOptions<ProdutoContext> options) : base(options)
        {

        }

        public DbSet<Produto> Produtos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Produto>()
                .Property(p => p.ProdutoId)
                .ValueGeneratedOnAdd(); // Indica que o valor do ID será gerado automaticamente ao adicionar um novo registro

            modelBuilder.Entity<Produto>()
                .HasKey(p => p.ProdutoId);
        }
    }
}
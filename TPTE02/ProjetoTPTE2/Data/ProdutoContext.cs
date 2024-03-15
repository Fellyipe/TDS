using Microsoft.EntityFrameworkCore;
using ProjetoTPTE2.Models;

namespace ProjetoTPTE2.Data
{
    public class ProdutoContext : DbContext
    {
        public ProdutoContext(DbContextOptions<ProdutoContext> options)
        {

        }

        public DbSet<Produto> Produtos { get; set; }
    }
}
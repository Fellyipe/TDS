using System.ComponentModel.DataAnnotations;

namespace ProjetoTPTE2.Models
{
    public class Produto
    {
        [Key]
        public int ProdutoId { get; set; }
        public string Nome { get; set; } = "";
        public decimal Preco { get; set; }
        public int Quantidade { get; set; }

        public Produto(string nome, decimal preco, int quantidade)
        {
            Nome = nome;
            Preco = preco;
            Quantidade = quantidade;
        }
    }
}

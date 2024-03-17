using System.ComponentModel.DataAnnotations;

namespace ProjetoTPTE2.Models
{
    public class Produto
    {
        [Key]
        public int ProdutoId { get; set; }
        public string Nome { get; set; } = "";
        public string Descricao { get; set; } = "";
        public double Preco { get; set; }
        public int Estoque { get; set; }

        public Produto(string nome, string descricao, double preco, int estoque)
        {
            Nome = nome;
            Descricao = descricao;
            Preco = preco;
            Estoque = estoque;
        }
    }
}

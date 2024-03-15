namespace ProjetoTPTE2.Models
{
    public class ProdutoDto
    {
        public string Nome { get; set; } = "";
        public string Descricao { get; set; } = "";
        public double Preco { get; set; }
        public int Estoque { get; set; }
    }
}
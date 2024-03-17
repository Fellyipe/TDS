using Microsoft.AspNetCore.Mvc;
using ProjetoTPTE2.Data;
using ProjetoTPTE2.Models;

namespace ProjetoTPTE2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutoController : ControllerBase
    {
        [HttpGet]
        [Route("/")]
        public IActionResult Get([FromServices] ProdutoContext produtoContext)
        {
            return Ok(produtoContext.Produtos!.ToList());
        }

        [HttpPost("/")]
        public IActionResult Post([FromBody] ProdutoDto produtoDto, [FromServices] ProdutoContext produtoContext)
        {
            var novoProduto = new Produto(produtoDto.Nome, produtoDto.Preco, produtoDto.Quantidade);
            produtoContext.Produtos!.Add(novoProduto);
            produtoContext.SaveChanges();
            return Created($"/{novoProduto.ProdutoId}", novoProduto);
        }

        [HttpGet("/{id:int}")]
        public IActionResult GetById([FromRoute] int id, [FromServices] ProdutoContext produtoContext)
        {
            var produto = produtoContext.Produtos!.FirstOrDefault(x => x.ProdutoId == id);
            if (produto == null) {
                return NotFound();
            }
            return Ok(produto);
        }

        [HttpPut("/{id:int}")]
        public IActionResult Put([FromRoute] int id, [FromBody] ProdutoDto produtoDto, [FromServices] ProdutoContext produtoContext)
        {
            var model = produtoContext.Produtos!.FirstOrDefault(x => x.ProdutoId == id);
            if (model == null)
            {
                return NotFound();
            }

            model.Nome = produtoDto.Nome;
            model.Preco = produtoDto.Preco;
            model.Quantidade = produtoDto.Quantidade;

            produtoContext.Produtos!.Update(model);
            produtoContext.SaveChanges();
            return Ok(model);
        }

        [HttpDelete("/{id:int}")]
        public IActionResult Delete([FromRoute] int id, [FromServices] ProdutoContext produtoContext)
        {
            var model = produtoContext.Produtos!.FirstOrDefault(x => x.ProdutoId == id);
            if (model == null)
            {
                return NotFound();
            }

            produtoContext.Produtos!.Remove(model);
            produtoContext.SaveChanges();
            return Ok(model);
        }
    }
}
using ProjetoTPTE2.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

/*builder.Services.AddDbContext<ProdutoContext>(
    opt => opt.UseMySQL()
);*/

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddDbContext<ProdutoContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"), new MySqlServerVersion(new Version(8, 0, 26))));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();

/*app.MapGet("/produtos", () => produtos);

app.MapGet("/produtos/{id}", (int id) =>
    produtos.FirstOrDefault(p => p.Id == id) is ProjetoTPTE2.Models.Produto produto 
    ? Results.Ok(produto) 
    : Results.NotFound());

app.MapPost("/produtos", (ProjetoTPTE2.Models.ProdutoDto produtodto) =>
{
    maiorId++;
    int novoId = maiorId;

    var novoProduto = new ProjetoTPTE2.Models.Produto(produtodto.Nome, produtodto.Descricao, produtodto.Preco, produtodto.Estoque, novoId);

    produtos.Add(novoProduto);
    return Results.Created($"/produtos/{novoProduto.Id}", novoProduto);
});

app.MapPut("/produtos/{id}", (int id, ProjetoTPTE2.Models.ProdutoDto produtodto) =>
{
    var produto = produtos.FirstOrDefault(p => p.Id == id);

    if (produto == null)
    {
        return Results.NotFound();
    }

    produto.Nome = produtodto.Nome;
    produto.Descricao = produtodto.Descricao;
    produto.Preco = produtodto.Preco;
    produto.Estoque = produtodto.Estoque;

    return Results.NoContent();
});


app.MapDelete("/produtos/{id}", (int id) =>
{
    var index = produtos.FindIndex(p => p.Id == id);
    if (index != -1)
    {
        produtos.RemoveAt(index);
        return Results.NoContent();
    }
    else
    {
        return Results.NotFound();
    }
});*/

app.Run();

    
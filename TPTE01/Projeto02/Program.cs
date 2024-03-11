using Microsoft.OpenApi.Models;

var produtos = new List<Projeto02.Models.Produto>
{
    new Projeto02.Models.Produto("Fone de ouvido", "Fone de ouvido preto", 19.99, 100, 1),
    new Projeto02.Models.Produto("Capinha de smartphone", "Capinha de smartphone transparente", 15, 150, 2),
    new Projeto02.Models.Produto("Carregador", "Carregador rápido", 30.99, 70, 3)
};

int maiorId = produtos.Max(p => p.Id);

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/produtos", () => produtos);

app.MapGet("/produtos/{id}", (int id) =>
    produtos.FirstOrDefault(p => p.Id == id) is Projeto02.Models.Produto produto 
    ? Results.Ok(produto) 
    : Results.NotFound());

app.MapPost("/produtos", (Projeto02.Models.ProdutoDto produtodto) =>
{
    maiorId++;
    int novoId = maiorId;

    var novoProduto = new Projeto02.Models.Produto(produtodto.Nome, produtodto.Descricao, produtodto.Preco, produtodto.Estoque, novoId);

    produtos.Add(novoProduto);
    return Results.Created($"/produtos/{novoProduto.Id}", novoProduto);
});

app.MapPut("/produtos/{id}", (int id, Projeto02.Models.ProdutoDto produtodto) =>
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
});

app.Run();


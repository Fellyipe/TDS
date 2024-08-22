// Importando o Express
const express = require('express');

// Criando uma aplicação Express
const app = express();

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());

// Definindo uma rota GET na raiz ('/')
app.get('/', (req, res) => {
    res.send('Bem-vindo ao GardenCare!');
});


// Definindo uma rota GET para listar plantas
app.get('/plantas', (req, res) => {
    // Exemplo de resposta (normalmente isso viria de um banco de dados)
    const plantas = [
        { id: 1, nome: 'Rosa', tipo: 'Flor', frequenciaRega: 3 },
        { id: 2, nome: 'Cacto', tipo: 'Suculenta', frequenciaRega: 10 }
    ];
    res.json(plantas);
});

// Definindo uma rota POST para adicionar uma planta
app.post('/plantas', (req, res) => {
    // Pegando dados do corpo da requisição
    const { nome, tipo, frequenciaRega } = req.body;
    
    // Aqui você normalmente salvaria isso no banco de dados
    const novaPlanta = { id: Date.now(), nome, tipo, frequenciaRega };
    
    // Respondendo com a planta criada
    res.status(201).json(novaPlanta);
});

app.put('/plantas', (req, res) => {
    
});

// Iniciando o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

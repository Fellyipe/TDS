require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const plantRoutes = require('./routes/plantRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar ao banco de dados
connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

// Usar as rotas de plantas
app.use('/api/plants', plantRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
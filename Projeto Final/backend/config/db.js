const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/greenthumb');
        console.log(`MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Erro de conexão: ${error.message}`);
        process.exit(1); // Encerra a aplicação em caso de erro
    }
};

module.exports = connectDB;

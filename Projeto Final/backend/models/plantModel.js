const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastWatered: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,  // Relaciona com o modelo de usuário
        ref: 'User',  // Refere-se ao modelo de usuário
        required: true,
    },
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
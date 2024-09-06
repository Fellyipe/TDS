const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastWatered: {
        type: Date,
        required: true
    },
    wateringFrequency: {
        type: Number,
        required: true
    },
    nextWatering: {
        type: Date,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
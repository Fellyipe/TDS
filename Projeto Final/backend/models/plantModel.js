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
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
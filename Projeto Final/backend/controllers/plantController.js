const Plant = require('../models/plantModel');

// Função para obter todas as plantas
exports.getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Função para criar uma nova planta
exports.createPlant = async (req, res) => {
    const { name, lastWatered } = req.body;

    try {
        const newPlant = new Plant({
            name,
            lastWatered,
        });

        const savedPlant = await newPlant.save();
        res.status(201).json(savedPlant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

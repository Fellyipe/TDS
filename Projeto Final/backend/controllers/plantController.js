const Plant = require('../models/plantModel');

// Obter todas as plantas
exports.getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Criar uma nova planta
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

// Atualizar uma planta
exports.updatePlant = async (req, res) => {
    const { id } = req.params;
    const { name, lastWatered } = req.body;

    try {
        const updatedPlant = await Plant.findByIdAndUpdate(
            id,
            { name, lastWatered },
            { new: true, runValidators: true }
        );

        if (!updatedPlant) {
            return res.status(404).json({ message: 'Planta não encontrada' });
        }

        res.json(updatedPlant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Excluir uma planta
exports.deletePlant = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPlant = await Plant.findByIdAndDelete(id);

        if (!deletedPlant) {
            return res.status(404).json({ message: 'Planta não encontrada' });
        }

        res.json({ message: 'Planta removida com sucesso' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Função para buscar plantas por nome
exports.getPlantsByName = async (req, res) => {
    const { name } = req.query;

    try {
        const plants = await Plant.find({ name: { $regex: name, $options: 'i' } });
        res.json(plants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

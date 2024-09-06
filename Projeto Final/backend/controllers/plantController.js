const { addDays, format } = require('date-fns');
const Plant = require('../models/plantModel');

// Obter todas as plantas do usuário autenticado
exports.getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find({ user: req.user.id });  // Filtrar plantas por usuário
        res.json(plants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Criar uma nova planta para o usuário autenticado
exports.createPlant = async (req, res) => {
    const { name, lastWatered, wateringFrequency } = req.body;
    
    try {
        
        const lastWateredDate = new Date(lastWatered + "T00:00");
        const nextWateringDate = addDays(lastWateredDate, parseInt(wateringFrequency));
        nextWatering = format(nextWateringDate, 'yyyy-MM-dd');

        const newPlant = new Plant({
            name,
            lastWatered,
            wateringFrequency,
            nextWatering,
            user: req.user.id  // Associar planta ao usuário
        });

        const savedPlant = await newPlant.save();
        res.status(201).json(savedPlant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Atualizar uma planta do usuário autenticado
exports.updatePlant = async (req, res) => {
    const { id } = req.params;
    const { name, lastWatered, wateringFrequency } = req.body;

    try {
        const lastWateredDate = new Date(lastWatered + "T00:00");
        const nextWateringDate = addDays(lastWateredDate, parseInt(wateringFrequency));
        nextWatering = format(nextWateringDate, 'yyyy-MM-dd');

        const updatedPlant = await Plant.findOneAndUpdate(
            { _id: id, user: req.user.id },  // Verificar se a planta pertence ao usuário
            { name, lastWatered, wateringFrequency, nextWatering },
            { new: true, runValidators: true }
        );

        if (!updatedPlant) {
            return res.status(404).json({ message: 'Planta não encontrada ou não pertence ao usuário' });
        }

        res.json(updatedPlant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Excluir uma planta do usuário autenticado
exports.deletePlant = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPlant = await Plant.findOneAndDelete({ _id: id, user: req.user.id });  // Verificar se a planta pertence ao usuário

        if (!deletedPlant) {
            return res.status(404).json({ message: 'Planta não encontrada ou não pertence ao usuário' });
        }

        res.json({ message: 'Planta removida com sucesso' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Buscar plantas por nome do usuário autenticado
exports.getPlantsByName = async (req, res) => {
    const { name } = req.query;

    try {
        const plants = await Plant.find({
            name: { $regex: name, $options: 'i' },
            user: req.user.id  // Filtrar plantas por usuário
        });
        res.json(plants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

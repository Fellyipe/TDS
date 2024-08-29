const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Rota para obter todas as plantas
router.get('/', plantController.getAllPlants);

// Rota para adicionar uma nova planta
router.post('/', plantController.createPlant);

// Rota para atualizar uma planta
router.put('/:id', plantController.updatePlant);

// Rota para atualizar uma planta
router.delete('/:id', plantController.deletePlant);

// Rota para buscar plantas por nome
router.get('/search', plantController.getPlantsByName);


module.exports = router;

const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Rota para obter todas as plantas
router.get('/', plantController.getAllPlants);

// Rota para adicionar uma nova planta
router.post('/', plantController.createPlant);

module.exports = router;

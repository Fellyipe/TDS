const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');
const auth = require('../middleware/auth');

// Rota para obter todas as plantas
router.get('/', auth, plantController.getAllPlants);

// Rota para adicionar uma nova planta
router.post('/', auth, plantController.createPlant);

// Rota para atualizar uma planta
router.put('/:id', auth, plantController.updatePlant);

// Rota para atualizar uma planta
router.delete('/:id', auth, plantController.deletePlant);

// Rota para buscar plantas por nome
router.get('/search', auth, plantController.getPlantsByName);

// Rota para verificar plantas que precisam de rega
router.get('/check-watering', atuh, plantController.checkWatering);

module.exports = router;




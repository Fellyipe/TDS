const Plant = require('../models/plantModel');

async function checkPlantsNeedingWatering() {
    const today = new Date();
    
    try {
        const plants = await Plant.find();
        const plantsNeedingWater = plants.filter(plant => {
            const lastWatered = new Date(plant.lastWatered);
            const nextWateringDate = new Date(lastWatered);
            nextWateringDate.setDate(nextWateringDate.getDate() + plant.wateringFrequency);

            return today >= nextWateringDate;
        });

        return plantsNeedingWater;
    } catch (error) {
        console.error('Erro ao verificar plantas:', error);
        throw error;
    }
}

module.exports = checkPlantsNeedingWatering;

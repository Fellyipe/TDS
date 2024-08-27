const plants = [
    { id: 1, name: 'Ficus', lastWatered: '2023-08-01' },
    { id: 2, name: 'Aloe Vera', lastWatered: '2023-08-03' },
];

// Função para obter todas as plantas
exports.getAllPlants = (req, res) => {
    res.json(plants);
};

// Função para criar uma nova planta
exports.createPlant = (req, res) => {
    const newPlant = {
        id: plants.length + 1,
        name: req.body.name,
        lastWatered: req.body.lastWatered,
    };
    plants.push(newPlant);
    res.status(201).json(newPlant);
};

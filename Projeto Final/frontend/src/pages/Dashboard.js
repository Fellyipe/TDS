import React from 'react';
import PlantCard from '../components/PlantCard'; // Importa o componente PlantCard

function Dashboard() {
    // Dados simulados para teste
    const plants = [
        { id: 1, name: 'Rosa', lastWatered: '2 dias atrás', image: 'path-to-rose-image.jpg' },
        { id: 2, name: 'Cacto', lastWatered: '7 dias atrás', image: 'path-to-cactus-image.jpg' },
    ];

    return (
        <div className="dashboard">
            <h1>Suas Plantas</h1>
            <div className="plant-list">
                {plants.map((plant) => (
                    <PlantCard 
                        key={plant.id}
                        name={plant.name}
                        lastWatered={plant.lastWatered}
                        image={plant.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;

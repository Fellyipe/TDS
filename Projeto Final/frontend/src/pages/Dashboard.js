import React, { useEffect, useState } from 'react';
import PlantCard from '../components/PlantCard';
import { fetchPlants, deletePlant } from '../api';
import PlantForm from '../components/PlantForm';

function Dashboard() {
    const [plants, setPlants] = useState([]);
    const [editPlant, setEditPlant] = useState(null);

    // Função para carregar plantas
    const loadPlants = async () => {
        try {
            const data = await fetchPlants();
            setPlants(data);
        } catch (error) {
            console.error('Erro ao buscar plantas:', error);
        }
    };

    useEffect(() => {
        loadPlants();
    }, []);

    // Função para definir a planta a ser editada
    const handleEditPlant = (id) => {
        const plantToEdit = plants.find((plant) => plant._id === id);
        setEditPlant(plantToEdit);
    };

    // Função para limpar a planta em edição
    const handleCancelEdit = () => {
        setEditPlant(null);
    };

    // Função para atualizar a lista de plantas após uma edição ou exclusão
    const handlePlantUpdated = () => {
        loadPlants();
        setEditPlant(null);
    };

    // Função para excluir uma planta
    const handleDeletePlant = async (id) => {
        try {
            await deletePlant(id);
            loadPlants();
        } catch (error) {
            console.error('Erro ao excluir planta:', error);
        }
    };

    return (
        <div className="dashboard">
            <h1>Suas Plantas</h1>
            <PlantForm 
                onPlantAdded={handlePlantUpdated} 
                plantToEdit={editPlant} 
                onCancelEdit={handleCancelEdit} 
            />
            <div className="plant-list">
                {plants.map((plant) => (
                    <PlantCard 
                        key={plant._id}  // Usando _id como chave
                        id={plant._id}
                        name={plant.name}
                        lastWatered={plant.lastWatered}
                        onEdit={() => handleEditPlant(plant._id)}
                        onDelete={() => handleDeletePlant(plant._id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;

import React, { useEffect, useState } from 'react';
import PlantCard from '../components/PlantCard';
import { fetchPlants, updatePlant, deletePlant } from '../api';
import PlantForm from '../components/PlantForm';
import Navbar from '../components/Navbar';

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

    // Função para registrar a rega
    const handleWaterPlant = async (id, name, date, wateringFrequency) => {
        try {
            await updatePlant(id, { name:name, lastWatered: date, wateringFrequency: wateringFrequency });
            loadPlants();
        } catch (error) {
            console.error('Erro ao atualizar data da rega:', error);
        }
    };

    return (
        <div className="dashboard">
            <Navbar plants={plants}></Navbar>
            <h1>Suas Plantas</h1>
            <PlantForm 
                onPlantAdded={handlePlantUpdated} 
                plantToEdit={editPlant} 
                onCancelEdit={handleCancelEdit} 
            />
            <div className="plant-list">
                {plants.map((plant) => (
                    <PlantCard 
                        key={plant._id}
                        id={plant._id}
                        name={plant.name}
                        lastWatered={plant.lastWatered}
                        wateringFrequency={plant.wateringFrequency}
                        nextWatering={plant.nextWatering}
                        onEdit={() => handleEditPlant(plant._id)}
                        onDelete={() => handleDeletePlant(plant._id)}
                        onWaterPlant={handleWaterPlant}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;

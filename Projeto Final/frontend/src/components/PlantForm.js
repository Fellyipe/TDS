import React, { useState, useEffect } from 'react';
import { addPlant, updatePlant } from '../api';

const PlantForm = ({ onPlantAdded, plantToEdit, onCancelEdit }) => {
    const [name, setName] = useState('');
    const [lastWatered, setLastWatered] = useState('');
    const [wateringFrequency, setWateringFrequency] = useState('');

    useEffect(() => {
        if (plantToEdit) {
            setName(plantToEdit.name);
            setLastWatered(plantToEdit.lastWatered);
            setWateringFrequency(plantToEdit.wateringFrequency);
        } else {
            setName('');
            setLastWatered('');
            setWateringFrequency('');
        }
    }, [plantToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const plantData = { name, lastWatered, wateringFrequency };
        
        try {
            if (plantToEdit) {
                await updatePlant(plantToEdit._id, plantData);
            } else {
                await addPlant(plantData);
            }
            setName('');
            setLastWatered('');
            setWateringFrequency('');
            onPlantAdded();
            onCancelEdit();  // Limpa a planta em edição após sucesso
        } catch (error) {
            console.error('Erro ao adicionar/atualizar planta:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome da Planta:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Última Rega:</label>
                <input
                    type="date"
                    value={lastWatered}
                    onChange={(e) => setLastWatered(e.target.value)}
                />
            </div>
            <div>
                <label>Intervalo de rega (em dias):</label>
                <input
                    type="number"
                    value={wateringFrequency}
                    onChange={(e) => setWateringFrequency(e.target.value)}
                />
            </div>

            <button type="submit">{plantToEdit ? 'Atualizar Planta' : 'Adicionar Planta'}</button>
            {plantToEdit && <button type="button" onClick={onCancelEdit}>Cancelar</button>}
        </form>
    );
};

export default PlantForm;

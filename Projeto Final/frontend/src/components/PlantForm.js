import React, { useState } from 'react';
import { addPlant } from '../api';

const PlantForm = () => {
    const [name, setName] = useState('');
    const [lastWatered, setLastWatered] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPlant = { name, lastWatered };
        await addPlant(newPlant);
        setName('');
        setLastWatered('');
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
            <button type="submit">Adicionar Planta</button>
        </form>
    );
};

export default PlantForm;

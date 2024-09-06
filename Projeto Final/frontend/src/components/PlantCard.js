import React, { useState } from 'react';
import '../assets/plantcard.css';

function PlantCard({ id, name, lastWatered, wateringFrequency, nextWatering, onEdit, onDelete, onWaterPlant }) {
    const [waterDate, setWaterDate] = useState('');

    const handleWatering = () => {
        const dateToSet = waterDate || new Date().toISOString().split('T')[0];
        onWaterPlant(id, name, dateToSet, wateringFrequency);
        setWaterDate(''); // Limpar o campo após a ação
    };    

    const today = new Date().toISOString().split('T')[0];
    const nextWateringDate = nextWatering.split('T')[0];
    const isWateringDay = nextWateringDate === today;

    const toDay = lastWatered.split('-')[2].split('T')[0];
    const toMonth = lastWatered.split('-')[1];
    const toYear = lastWatered.split('-')[0];

    const nextDay = nextWatering.split('-')[2].split('T')[0];
    const nextMonth = nextWatering.split('-')[1];
    const nextYear = nextWatering.split('-')[0];

    return (
        <div className="plant-card">
            <h2>{name}</h2>
            <p>Última Rega: {(today.split('-')[0] == toYear) ? (toDay + "/" + toMonth) : (toDay + "/" + toMonth + "/" + toYear)}</p>
            <p>Dias entre uma rega e outra: {wateringFrequency}</p>
            <p>Próxima rega: {(today.split('-')[0] == nextYear) ? (nextDay + "/" + nextMonth) : (nextDay + "/" + nextMonth + "/" + nextYear)}</p>
            {isWateringDay && <div className="alert">Hoje é dia de regar!</div>}
            <button onClick={onEdit} className='btn btn-success'>Editar</button>
            <button onClick={onDelete} className='btn btn-danger'>Excluir</button>
            <button className="btn">Regar</button>
            <div>
                <input 
                    type="date" 
                    value={waterDate} 
                    onChange={(e) => setWaterDate(e.target.value)} 
                />
                <button onClick={handleWatering} className='btn btn-primary'>Marcar Rega</button>
            </div>
        </div>
    );
}

export default PlantCard;
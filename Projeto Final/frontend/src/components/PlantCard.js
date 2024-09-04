import React from 'react';
import '../assets/plantcard.css';

function PlantCard({ id, name, lastWatered, onEdit, onDelete }) {
    return (
        <div className="plant-card">
            <h2>{name}</h2>
            <p>Última Rega: {lastWatered}</p>
            <button onClick={onEdit}>Editar</button>
            <button onClick={onDelete}>Excluir</button>
        </div>
    );
}

export default PlantCard;
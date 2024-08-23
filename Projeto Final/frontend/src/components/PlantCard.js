import React from 'react';
import '../assets/plantcard.css'; // Opcional: Para adicionar estilo específico ao cartão

function PlantCard({ name, lastWatered, image }) {
    return (
        <div className="plant-card">
            <img src={image} alt={name} className="plant-image" />
            <h2>{name}</h2>
            <p>Última rega: {lastWatered}</p>
        </div>
    );
}

export default PlantCard;

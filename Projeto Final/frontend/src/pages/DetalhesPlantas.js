import React from 'react';
import { useParams } from 'react-router-dom';

function DetalhesPlantas() {
    const { id } = useParams(); // Obtém o ID da planta a partir da URL

    // Dados simulados para teste
    const plant = {
        id: 1,
        name: 'Rosa',
        lastWatered: '2 dias atrás',
        details: 'A Rosa é uma planta que precisa de regas frequentes e muita luz solar.',
        image: 'path-to-rose-image.jpg',
    };

    return (
        <div className="detalhes-plantas">
            <h1>{plant.name}</h1>
            <img src={plant.image} alt={plant.name} />
            <p>Última rega: {plant.lastWatered}</p>
            <p>{plant.details}</p>
        </div>
    );
}

export default DetalhesPlantas;

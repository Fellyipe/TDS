import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ plants }) {
    const today = new Date().toISOString().split('T')[0];
    const wateringTodayCount = plants.filter(plant => plant.nextWatering.split('T')[0] === today).length;

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li>Rega Hoje: {wateringTodayCount > 0 && <span className="badge">{wateringTodayCount}</span>}</li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}


export default Navbar;
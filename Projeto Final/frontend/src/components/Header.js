import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>Greenthumb</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

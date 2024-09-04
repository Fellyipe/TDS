import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/header.css';

const Header = () => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Registrar</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

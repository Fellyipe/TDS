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
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container container-flex'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li className='btn'><Link to="/dashboard">Dashboard</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Registrar</Link></li>
                        </>
                    )}
                </ul>
                </div>
            </nav>
        </header>
        
    );
};

export default Header;

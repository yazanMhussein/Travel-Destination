// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                Travel Distination
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import CSS file for navbar styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/" className="logo-text">Your Logo</Link>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

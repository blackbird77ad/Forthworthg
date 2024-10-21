import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCogs, FaServicestack, FaProjectDiagram, FaEnvelope, FaUserCircle } from 'react-icons/fa'; // Import icons
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo-container">
                    <Link to="/">
                        <FaUserCircle className="logo-icon" /> {/* Use a relevant icon for the logo */}
                    </Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav-link">
                            <FaHome className="nav-icon" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/stack" className="nav-link">
                            <FaCogs className="nav-icon" />
                            Stack
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="nav-link">
                            <FaServicestack className="nav-icon" />
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="nav-link">
                            <FaProjectDiagram className="nav-icon" />
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link">
                            <FaEnvelope className="nav-icon" />
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

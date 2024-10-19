import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import logo  from '../assets/images/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <div className='nav-half'>
                    <Link to="/"><img src={logo} alt="My icon" className='nav-logo'/></Link>
                    <h3>Prem.Da</h3>
                    <a href="../assets/images/Davida-CV-webdev.zip" download className='nav-a'>
                        <button className='nav-button'>RESUME</button>
                    </a>
                </div>

                <div className='nav-links'>
                    <ul>
                        <li className='nav-a a-color'><Link to="/">Home</Link></li>
                        <li className='nav-a a-color'><Link to="/stack">Stack</Link></li>
                        <li className='nav-a a-color'><Link to="/services">Services</Link></li>
                        <li className='nav-a a-color'><Link to="/projects">Projects</Link></li>
                        <li className='nav-a a-color'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Davida - Full Stack Developer</p>
                <div className="social-links">
                    <a href="https://github.com/blackbird77ad" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://linkedin.com/in/ydavidaaprempeh" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="mailto:byourself77by@gmail.com">
                        <FaEnvelope className="social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

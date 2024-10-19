import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Davida - Full Stack Developer</p>
                <div className="social-links">
                    <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="mailto:your-email@example.com">
                        <FaEnvelope className="social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

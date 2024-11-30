import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-300 py-5 text-center h-28">
            <div className="flex flex-col items-center justify-center">
                <p className="text-blue-900 text-lg">© 2024 Davida - Web Developer</p>
                <div className="flex gap-5 mt-3">
                    <a href="https://github.com/blackbird77ad" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-black text-2xl hover:text-purple-700 transition-colors duration-300" />
                    </a>
                    <a href="https://linkedin.com/in/davidaaprempeh" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-black text-2xl hover:text-purple-700 transition-colors duration-300" />
                    </a>
                    <a href="mailto:byourself77by@gmail.com">
                        <FaEnvelope className="text-black text-2xl hover:text-purple-700 transition-colors duration-300" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

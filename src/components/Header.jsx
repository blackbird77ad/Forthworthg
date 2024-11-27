import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex items-center justify-between bg-slate-200 shadow-cyan-5/50 text-black h-24 px-4">
            <button onClick={toggleSidebar} className="text-2xl">
                ☰
            </button>
           <Link to='/'>
                <h1 className="text-4xl font-extrabold text-blue-800">Da.PREMPEH</h1>
           </Link>
            <nav className="flex space-x-4 w-1/3 justify-between">
                <a href="/" className="text-1/5xl font-extrabold text-black-500">Home</a>
                <a href="/about" className="text-1/5xl font-extrabold text-black-500">AboutMe</a>
                <a href="/projects" className="text-1/5xl font-extrabold text-black-500">Projects</a>
                <a href="/skills" className="text-1/5xl font-extrabold text-black-500">Skills</a>
                <a href="/testimonials" className="text-1/5xl font-extrabold text-black-500">Testimonials</a>
                <a href="/contact" className="text-1/5xl font-extrabold text-black-500">Contact</a>
            </nav>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </header>
    );
};

export default Header;

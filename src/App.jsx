import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stack from './pages/Stack';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stack" element={<Stack />} />
                    <Route path="/service" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

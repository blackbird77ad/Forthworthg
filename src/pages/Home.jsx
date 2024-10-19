import React from "react";
import './Home.css';
import homeImg from '../assets/images/crop.jpg';
import { Link } from "react-router-dom";

function Home() {
    const name = 'Davida';
    return (
        <>
            <div className="divs-bg">
                <div className="hero-parent">
                    <div className="text-section">
                        <span className="greeting">Hello!</span>
                        <h1 className="main-title">Let's Build Something Extraordinary Together</h1>
                        <p className="description">
                            I'm a Full Stack Developer with a proven track record of delivering efficient, scalable, and user-focused web applications. Ready to help your business grow and succeed with innovative solutions."
                        </p>
                        <div className="buttons">
                            <Link to="/contact">
                                <button className="primary-button">Let's Talk</button>
                            </Link>
                            <Link to="/projects" className="secondary-link">Portfolio ↗</Link>
                        </div>
                    </div>

                    <div className="image-section">
                        <div className="image-wrapper">
                            <img src={homeImg} alt="my profile" className="profile-image" />
                            <div className="image-overlay">
                                <button className="learn-more">Learn About Me</button>
                            </div>
                        </div>
                        <blockquote className="quote">"Passionate, skilled, and ready to make an impact."</blockquote>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

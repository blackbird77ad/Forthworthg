import React from 'react';
import './Contact.css'; 

const Contact = () => {
    return (
        <div className='form-bg'>
            <div className="contact-form">
                <h2>Get In Touch</h2>
                <form className='form-card'>
                    <label htmlFor="company">Company:</label>
                    <input type="text" id="company" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" rows="3" required></textarea>

                    <button type="submit" className="submit-button">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

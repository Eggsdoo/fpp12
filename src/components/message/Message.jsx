import React from "react";
import './message.css';
import logoImg from '../../assets/bf-logo.png';

const Message = () => {
    return (
        <section className="message-section">
            <div className="message-logo-title">
                <img src={logoImg} alt="Logo" className="message-logo" /> 
                <h1 className="message-title">Better Future Party</h1>
            </div>


            <div className="message-content">
                <h1>Our Message</h1>
                <h2><em>We are the "Better Future" party, dedicated to building a prosperous, sustainable, inclusive, and better future for all Canadians.</em></h2>
                <p><strong>Our mission is to champion economic growth, environmental sustainability, and social equity through forward-thinking policies that address the challenges of our time <em>now not later.</em></strong></p>
                <p><strong>Join us in building a Better Future now, a Better Future together.</strong></p>
            </div>
        </section>
    );
}

export default Message;
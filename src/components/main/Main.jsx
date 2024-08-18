import React from "react";
import './main.css';
import mainImg from '../../assets/wajid-zaman.png';
import logoImg from '../../assets/bf-logo.png';

const Main = () => {
    return (
        <section className="main-section">
            <div className="main-gradient-bottom-left"></div>
            <div className="main-gradient-top-right"></div>
            <div className="main-gradient-top-left"></div>

            <div className="main-logo-title">
                <img src={logoImg} alt="Logo" className="main-logo" />
                <h1 className="main-title">Better Future</h1>
            </div>
            <header className="main-header">
                <p><strong>Better Future, <br /><span className="main-highlight"></span>Together.</strong></p>
            </header>
            <div className="main-portrait">
                <img src={mainImg} alt="Portrait" />
            </div>
        </section>
    );
}

export default Main;
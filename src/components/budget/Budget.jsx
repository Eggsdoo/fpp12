import React from "react";
import './budget.css';
import logoImg from '../../assets/bf-logo.png';
import { FaFilePdf } from "react-icons/fa6";
import Campaign from '../../assets/BF-Campaign.pdf';

const Budget = () => {
    return (
        <section className="budget-section">
            <div className="budget-logo-title">
                <img src={logoImg} alt="Logo" className="budget-logo" /> 
                <h1 className="budget-title">Better Future Party</h1>
            </div>

            <div className="budget-content">
                <h1>Campaign and Budget</h1>
                <h2><em>Feel free to download our Campaign Overview</em></h2>
            </div>

            <a href={Campaign} target="_blank" rel="noreferrer noopener"><div className="budget-file">
            <FaFilePdf />
            <p>2024</p>
            </div></a>
        </section>
    );
}

export default Budget;
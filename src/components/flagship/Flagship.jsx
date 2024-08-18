import React from "react";
import './flagship.css';
import logoImg from '../../assets/bf-logo.png';

const Flagship = () => {
    return (
        <section className="flagship-section">
            <div className="flagship-logo-title">
                <img src={logoImg} alt="Logo" className="flagship-logo" />
                <h1 className="flagship-title">Better Future Party</h1>
            </div>

            <div className="flagship-content">
                <h1>Homes For All Policy</h1>
                <h2><em>We will streamline construction permits and small business certifications, aiming to cut processing times by 50%, significantly accelerating the process to better support businesses and entrepreneurs.</em></h2>
                <p><strong>This comprehensive strategy will foster economic resilience, job creation, and equitable recovery. Additionally, by leveraging digital tools and simplifying regulatory processes, we will enhance transparency, reduce bureaucratic hurdles, and make it easier for businesses to comply with legal requirements.</strong></p>
                <p><strong>This initiative will also include targeted support for small businesses, ensuring that the benefits of our streamlined processes are accessible to all segments of the community.</strong></p>
                <p><strong>Through these efforts, we will create a more inclusive and dynamic business environment that drives innovation and long-term growth. By making these processes more efficient and accessible, we’re working towards a fairer society where everyone has a chance to thrive.</strong></p>
                <p><strong>Through these initiatives, we aim to create a "Better Future" where every citizen has the opportunity to thrive, in a society that is just, equitable, and sustainable. Our vision is of a Canada where progress and prosperity are shared by all.</strong></p>
            </div>
        </section>
    );
}

export default Flagship;
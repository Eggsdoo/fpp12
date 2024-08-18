import React from "react";
import './about.css';
import logoImg from '../../assets/bf-logo.png';
import mainImg from '../../assets/wajid-zaman.png';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-logo-title">
                <img src={logoImg} alt="Logo" className="about-logo" /> 
                <h1 className="about-title">Better Future Party</h1>
            </div>

            <div className="about-content">
                <h1>Meet Jad Alriyabi</h1>
                <h2><em>"Jad Alriyabi, the leader of the "Better Future" party, is a visionary professional with a diverse background in AI, cybersecurity, project management, and entrepreneurship."</em></h2>
                <p><strong>His entrepreneurial spirit led him to establish a family business focused on supplying organic Middle Eastern food to local businesses, demonstrating his business acumen and commitment to cultural heritage and supporting local businesses.</strong></p>
                <p><strong>Jad’s vision for Canada is to keep the Canadian dream of aiming for a Better Future alive. Jad is the son of immigrant parents who fled to Canada from Syria in hopes of a better future. A future which they have succeeded in building in B.C. Now it's Jad’s turn to make sure Canada’s future is secured for all Canadians through economic prosperity, environmental sustainability, and inclusivity for all.</strong></p>
                <p><strong>Jad Alriyabi’s leadership is a beacon of hope for those seeking progress and meaningful reforms. His journey from a tech-savvy entrepreneur to the leader of the "Better Future" party exemplifies his unwavering dedication to creating a Canada where every citizen has the opportunity to thrive in a just, equitable, and sustainable society.</strong></p>
            </div>

            <div className="about-portrait">
                <img src={mainImg} alt="Portrait" />
            </div>
        </section>
    );
}

export default About;
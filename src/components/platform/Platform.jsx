import React from "react";
import './platform.css';
import logoImg from '../../assets/bf-logo.png';

const Platform = () => {
    return (
        <div className="platform-section">
            <div className="platform-logo-title">
                <img src={logoImg} alt="Logo" className="platform-logo" />
                <h1 className="platform-title">Better Future Party</h1>
            </div>

            <div className="platform-content">
                <h1>Core Policies</h1>
                <h2>We will invest $10 billion in green industries, establish a $20 national living wage, and support small businesses by waiving credit card fees. Additionally, we'll fund sustainable energy projects, fulfill the Truth and Reconciliation Commission's Calls to Action, improve healthcare access, and tackle housing affordability through cooperative housing and streamlined approvals.</h2>
                <h3><em>1. Economic Growth and Fair Employment.</em></h3>
                <p>a. We will drive post-pandemic recovery by investing $10 billion in green industries over the next five years to create thousands of new jobs and promote sustainable economic growth. Our plan includes enacting progressive taxation to reduce income disparity and establishing a national living wage of $20 per hour, benefiting millions of workers and lifting many families out of poverty.</p>
                <h3><em>2. Climate Change and Environmental Sustainability.</em></h3>
                <p>a. We commit to subsidizing sustainable energy projects by channelling profits from natural gas to support these initiatives. Specifically, we will mandate that 10% of the annual profits of major energy corporations, totaling an estimated $5 billion, be directed toward funding sustainable energy projects and supporting Indigenous communities.</p>
                <h3><em>3. Indigenous Rights and Reconciliation.</em></h3>
                <p>a. We are committed to fulfilling all 94 Calls to Action from the Truth and Reconciliation Commission, with a special focus on clean water access and equitable healthcare. Through our mobile hospital program, we will bring essential services to over 20 rural and Indigenous communities in need. To make this a reality, we’ll partner with 15 local organizations and healthcare providers to ensure that care is culturally appropriate and responsive.</p>
            </div>
        </div>
    );
}

export default Platform;
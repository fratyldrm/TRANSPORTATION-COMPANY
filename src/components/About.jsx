import React from 'react';
import './Css/About.css'; // Make sure to import the CSS file
import truckImage from '../assets/truck2.jpeg'; // Adjust the path as needed

const About = () => {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src={truckImage} alt="About Us" />
            </div>
            <div className="about-text">
                <h1>Hakkımızda</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Sed ac velit id quam dictum efficitur. Morbi dictum, est ac congue rhoncus, elit purus varius tortor, eu dignissim lorem ligula nec libero.
                </p>
                <p>
                    Curabitur pretium quam nec nisi efficitur, id vehicula odio posuere. Phasellus gravida, nulla et vestibulum vehicula, ligula justo auctor nisi, sit amet ultrices arcu eros id nulla.
                </p>
            </div>
        </div>
    );
}

export default About;

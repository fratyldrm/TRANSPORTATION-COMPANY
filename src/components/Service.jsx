import React, { useState } from 'react';
import "./Css/service.css";
import truckImage from '../assets/truck2.jpeg';

const Service = () => {
    const [activeIndex, setActiveIndex] = useState(3); // Start with the middle card

    const handleNext = () => {
        if (activeIndex < 6) {
            setActiveIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 1) {
            setActiveIndex(prevIndex => prevIndex - 1);
        }
    };

    return (
        <div className="services-container">
            <h2>SUNDUĞUMUZ HİZMETLER</h2>
            <h3>Hizmetlerimiz</h3>
            <div className="services">
                <button className="carousel-button left" onClick={handlePrev}>‹</button>
                <div className={`service-card card-1 ${activeIndex === 1 ? 'active' : ''}`}>
                    <img src={truckImage} alt="Evden Eve Nakliyat" />
                    <h4>Evden Eve Nakliyat</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <div className={`service-card card-2 ${activeIndex === 2 ? 'active' : ''}`}>
                    <img src={truckImage} alt="İşyeri Taşımacılığı" />
                    <h4>İşyeri Taşımacılığı</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <div className={`service-card card-3 ${activeIndex === 3 ? 'active' : ''}`}>
                    <img src={truckImage} alt="Asansörlü Taşımacılık" />
                    <h4>Asansörlü Taşımacılık</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <div className={`service-card card-4 ${activeIndex === 4 ? 'active' : ''}`}>
                    <img src={truckImage} alt="Evden Eve Nakliyat" />
                    <h4>Evden Eve Nakliyat</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <div className={`service-card card-5 ${activeIndex === 5 ? 'active' : ''}`}>
                    <img src={truckImage} alt="İşyeri Taşımacılığı" />
                    <h4>İşyeri Taşımacılığı</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <div className={`service-card card-6 ${activeIndex === 6 ? 'active' : ''}`}>
                    <img src={truckImage} alt="Asansörlü Taşımacılık" />
                    <h4>Asansörlü Taşımacılık</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <div className={`service-card card-1 ${activeIndex === 1 ? 'active' : ''}`}>
                    <img src={truckImage} alt="Evden Eve Nakliyat" />
                    <h4>Evden Eve Nakliyat</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <div className={`service-card card-2 ${activeIndex === 2 ? 'active' : ''}`}>
                    <img src={truckImage} alt="İşyeri Taşımacılığı" />
                    <h4>İşyeri Taşımacılığı</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <div className={`service-card card-3 ${activeIndex === 3 ? 'active' : ''}`}>
                    <img src={truckImage} alt="Asansörlü Taşımacılık" />
                    <h4>Asansörlü Taşımacılık</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <div className={`service-card card-4 ${activeIndex === 4 ? 'active' : ''}`}>
                    <img src={truckImage} alt="Evden Eve Nakliyat" />
                    <h4>Evden Eve Nakliyat</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <div className={`service-card card-5 ${activeIndex === 5 ? 'active' : ''}`}>
                    <img src={truckImage} alt="İşyeri Taşımacılığı" />
                    <h4>İşyeri Taşımacılığı</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <div className={`service-card card-6 ${activeIndex === 6 ? 'active' : ''}`}>
                    <img src={truckImage} alt="Asansörlü Taşımacılık" />
                    <h4>Asansörlü Taşımacılık</h4>
                    <a href="#">Detaylı İncele</a>
                </div>
                <button className="carousel-button right" onClick={handleNext}>›</button>
            </div>
        </div>
    );
}

export default Service;

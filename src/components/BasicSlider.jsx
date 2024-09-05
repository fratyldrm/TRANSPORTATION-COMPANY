import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Css/BasicSlider.css';

// Resimleri import edin
import image1 from '../assets/indir.jpeg';
import image2 from '../assets/truck2.jpeg';
import image3 from '../assets/truck3.jpeg';

const BasicSlider = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        beforeChange: (current, next) => {
            // Slayt değişmeden önce animasyonları sıfırla
            const slideContents = document.querySelectorAll('.slide-content');
            slideContents.forEach((content) => {
                content.classList.remove('show');
            });
        },
        afterChange: () => {
            // Slayt değiştikten sonra animasyonları yeniden başlat
            const slideContents = document.querySelectorAll('.slide-content');
            slideContents.forEach((content) => {
                content.classList.add('show');
            });
        }
    };

    const slides = [
        {
            image: image1,
            title: "Profesyonel Nakliye Firması",
            description: "Uygun Fiyatlar Kaliteli Hizmet Anlayışı!"
        },
        {
            image: image2,
            title: "Nakliye Firması",
            description: "Güvenli ve Hızlı Taşıma Çözümleri"
        },
        {
            image: image3,
            title: "Gelişmiş Lojistik Hizmetleri",
            description: "Her Türlü Nakliye İhtiyacınıza Uygun Çözümler"
        }
    ];

    return (
        <Slider {...settings} ref={sliderRef}>
            {slides.map((slide, index) => (
                <div key={index} className="slide">
                    <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
                    <div className="slide-background"></div>
                    <div className="slide-content">
                        <h2 className="slide-title">{slide.title}</h2>
                        <p className="slide-description">{slide.description}</p>
                        <div className="slide-buttons">
                            <button className="slide-button">Hakkımızda</button>
                            <button className="slide-button">HEMEN ARA</button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>


    );
};

export default BasicSlider;

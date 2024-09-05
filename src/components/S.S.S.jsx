import './Css/HouseToHouse.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import et
import Pagestransport from './pagestransport'

const SSS = () => {

    const navigate = useNavigate();

    // Sıkça sorulan soruların olduğu array
    const questions = [
        { question: "Taşımacılık fiyatları nasıl belirlenir?", answer: "Fiyatlar, taşınacak eşyaların miktarına, mesafeye ve diğer koşullara göre belirlenir." },
        { question: "Eşyalarımı kim paketleyecek?", answer: "Eşyalarınızı genellikle taşımayı gerçekleştiren firma personeli paketler." },
        { question: "Ne tür ambalajlama malzemesi kullanılır?", answer: "Karton kutular, balonlu naylon, streç film gibi malzemeler kullanılır." },
        { question: "Personeller firmanıza ait mi?", answer: "Personellerimiz firmamız bünyesinde çalışmaktadır." },
        { question: "Paketlemede Nelere Dikkat Edilmelidir?", answer: "Paketleme sırasında kırılabilir ve hassas eşyalar ekstra koruma ile sarılmalıdır." },
        { question: "Asansörlü Nakliye Var Mı?", answer: "Evet, asansörlü nakliye hizmeti sunmaktayız." },
        { question: "Taşıma esnasında avizelerim, perdelerim, storlarımız sökülüp takılır mı?", answer: "Evet, bu tür eşyalarınızın montajı ve demontajı yapılmaktadır." }
    ];

    // Açık olan soruyu takip eden state
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Tıklandığında aç/kapat işlemi yapılıyor
    };

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Sayfanın üst kısmında yer alan ve %25 yüksekliğe sahip olan resim */}
            <div style={{
                height: '300px',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                background: 'linear-gradient(to right, #042453, #FFFFFF)' // Soldan sağa doğru renk geçişi
            }}>
                <h1 style={{ marginTop: 130, padding: 22, color: 'white' }}>S.S.S</h1>
                <p style={{ color: '#ffc107', paddingLeft: 22 }}>Anasayfa - S.S.S</p>
            </div>

            {/* SSS Bölümü */}
            <div style={{ width: '75%', marginTop: 50 }}>
                {questions.map((item, index) => (
                    <div key={index} style={{
                        backgroundColor: '#f8f9fa',
                        margin: '10px 0',
                        padding: '15px',
                        borderRadius: 5,
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                color: '#193253', // Yazı rengi
                                fontSize: '14px' // Yazı boyutu küçültüldü
                            }}
                            onClick={() => toggleQuestion(index)}
                        >
                            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'normal' }}>{item.question}</h4>
                            <span>{openIndex === index ? '-' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <p style={{ marginTop: 10, color: '#555', fontSize: '14px' }}>{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div >
    );
};

export default SSS;

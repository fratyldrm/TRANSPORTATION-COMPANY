import './Css/HouseToHouse.css'
import React from 'react';
import evdeneve from '../assets/evdeneve.jpg'; // Resim yolunu buraya ekliyoruz
import { useNavigate } from 'react-router-dom'; // useNavigate import et
import Pagestransport from './pagestransport'

const Blog = () => {

    const navigate = useNavigate();


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
                <h1 style={{ marginTop: 130, padding: 22, color: 'white' }}>Blog</h1>
                <p style={{ color: '#ffc107', paddingLeft: 22 }}>Anasayfa - Blog</p>
            </div>

            {/* Kartların olduğu kısım */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                marginTop: 50
            }}>
                {/* Kart 1 */}
                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: 10,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: 20,
                    width: '30%',
                    height: "550px", // Kartların genişliği
                    textAlign: 'center'
                }}>
                    <img src={evdeneve} alt="Evden Eve" style={{ width: '100%', height: "350px", }} />
                    <h3 style={{ margin: '20px 0' }}>Başlık 1</h3>
                    <p>Bu, birinci kartın açıklaması. Kısa bir açıklama metni buraya eklenebilir.</p>
                </div>

                {/* Kart 2 */}
                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: 10,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: 20,
                    width: '30%',
                    height: "550px", // Kartların genişliği
                    textAlign: 'center'
                }}>
                    <img src={evdeneve} alt="Evden Eve" style={{ width: '100%', height: "350px", }} />
                    <h3 style={{ margin: '20px 0' }}>Başlık 1</h3>
                    <p>Bu, birinci kartın açıklaması. Kısa bir açıklama metni buraya eklenebilir.</p>
                </div>
                {/* Kart 3 */}
                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: 10,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: 20,
                    width: '30%',
                    height: "550px", // Kartların genişliği
                    textAlign: 'center'
                }}>
                    <img src={evdeneve} alt="Evden Eve" style={{ width: '100%', height: "350px", }} />
                    <h3 style={{ margin: '20px 0' }}>Başlık 1</h3>
                    <p>Bu, birinci kartın açıklaması. Kısa bir açıklama metni buraya eklenebilir.</p>
                </div>
            </div>
        </div >
    );
};

export default Blog;

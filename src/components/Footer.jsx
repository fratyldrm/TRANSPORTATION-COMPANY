import React from 'react'
import './Css/footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-menu">
                <a href="/">Anasayfa</a>
                <a href="/hakkimizda">Hakkımızda</a>
                <a href="/hizmetler">Hizmetlerimiz</a>
                <a href="/blog">Blog</a>
                <a href="/iletisim">İletişim</a>
            </div>
            <div className="footer-info">
                <div className="footer-info-section">
                    <h4>Mail</h4>
                    <p><a href="mailto:info@dnavipnakliye.com.tr">fratyldrmm7@gmail.com</a></p>
                    <p><a href="mailto:destek@dnavipnakliye.com.tr"></a></p>
                </div>
                <div className="footer-info-section">
                    <h4>Telefon</h4>
                    <p><a href="tel:+905310277362">0552 528 58 98</a></p>
                    <p><a href="tel:+905310277362">0537 624 43 68 </a></p>
                </div>
                <div className="footer-info-section">
                    <h4>Adres</h4>
                    <p>Küçükçekmece/İstanbul</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 EZEL NAKLİYAT Tüm Hakları Saklıdır. Bu web sitesi <a >Fırat Yıldırım</a> tarafından yapılmıştır.</p>
            </div>
        </footer>
    );
}

export default Footer;
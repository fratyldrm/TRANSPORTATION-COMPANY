import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pngegg.png';
import '../components/Css/Header.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <nav className="nav">
            <div className="menu">
                <img src={logo} alt="Logo" className="logo" />


                <Link to="/" className="menu-item">Anasayfa</Link>

                {/* Kurumsal Link with Nested Dropdowns */}
                <NavDropdown
                    id="nav-dropdown-kurumsal"
                    title="Kurumsal"
                    menuVariant="dark"
                    className="menu-item nav-dropdown"

                >
                    <NavDropdown.Item as={Link} to="/hakkımızda">Hakkımızda</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/kurumsal/Biz Kimiz?">Biz Kimiz?</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/kurumsal/Banka Hesapları">Banka Hesapları</NavDropdown.Item>
                    <NavDropdown.Divider />

                </NavDropdown>

                {/* Hizmetler Link */}
                <NavDropdown
                    id="nav-dropdown-hizmetler"
                    title="Hizmetler"
                    menuVariant="dark"
                    className="menu-item nav-dropdown"
                >
                    <NavDropdown.Item as={Link} to="/hizmetler/Evden Eve Nakliyat">Evden Eve Nakliyat</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hizmetler/İşyeri Taşımacılığı">İşyeri Taşımacılığı</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hizmetler/Asansörlü Taşımacılık">Asansörlü Taşımacılık</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hizmetler/Ambalajlı Nakliyat">Ambalajlı Nakliyat</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hizmetler/Sigortalı Nakliyat">Sigortalı Nakliyat</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hizmetler/Kurumsal Nakliyat">Kurumsal Nakliyat</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hizmetler/Şehir İçi Nakliyat">Şehir İçi Nakliyat</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hizmetler/Şehirler Arası Nakliyat">Şehirler Arası Nakliyat</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hizmetler/Parça Eşya Taşıma">Parça Eşya Taşıma</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hizmetler/Eşya Ambalajlama">Eşya Ambalajlama</NavDropdown.Item>
                </NavDropdown>

                {/* Blog Link */}
                <Link to="/blog" className="menu-item">Blog</Link>
                {/* S.S.S Link */}
                <Link to="/S.S.S" className="menu-item">S.S.S</Link>


                {/* Medya Link */}
                <NavDropdown
                    id="nav-dropdown-medya"
                    title="Medya"
                    menuVariant="dark"
                    className="menu-item nav-dropdown"
                >
                    <NavDropdown.Item as={Link} to="/medya">Galeri</NavDropdown.Item>
                </NavDropdown>

                {/* İletişim Link */}
                <Link to="/blog" className="menu-item">İletişim</Link>



            </div>
            <button className="contact-button">BİZE ULAŞ</button>
        </nav>
    );
};

export default Header;

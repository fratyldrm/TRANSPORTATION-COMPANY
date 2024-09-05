import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Institutional from './components/Institutional';
import './App.css';
import About2 from './components/About2';
import We from './components/we';
import Bank from './components/bank';
import HouseToHouse from './components/HouseToHouse';
import WorkplaceTransportation from './components/WorkplaceTransportation';
import ElevatorTransportation from './components/ElevatorTransportation';
import PackagedTransportation from './components/PackagedTransportation';
import InsuredTransportation from './components/InsuredTransportation';
import CorporateTransportation from './components/CorporateTransportation';
import UrbanTransport from './components/UrbanTransport';
import IntercityTransportation from './components/IntercityTransportation';
import PartialTransportation from './components/PartialTransportation';
import GoodsPackaging from './components/GoodsPackaging';
import Blog from './components/Blog';
import S from './components/S.S.S';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurumsal" element={<Institutional />} />
            <Route path="/hakkımızda" element={<About2 />} />
            <Route path="/kurumsal/Biz Kimiz?" element={<We />} />
            <Route path="/kurumsal/Banka Hesapları" element={<Bank />} />
            <Route path="/hizmetler/Evden Eve Nakliyat" element={<HouseToHouse />} />
            <Route path="/hizmetler/İşyeri Taşımacılığı" element={<WorkplaceTransportation />} />
            <Route path="/hizmetler/Asansörlü Taşımacılık" element={<ElevatorTransportation />} />
            <Route path="/hizmetler/Ambalajlı Nakliyat" element={<PackagedTransportation />} />
            <Route path="/hizmetler/Sigortalı Nakliyat" element={<InsuredTransportation />} />
            <Route path="/hizmetler/Kurumsal Nakliyat" element={<CorporateTransportation />} />
            <Route path="/hizmetler/Şehir İçi Nakliyat" element={<UrbanTransport />} />
            <Route path="/hizmetler/Şehirler Arası Nakliyat" element={<IntercityTransportation />} />
            <Route path="/hizmetler/Parça Eşya Taşıma" element={<PartialTransportation />} />
            <Route path="/hizmetler/Eşya Ambalajlama" element={<GoodsPackaging />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/S.S.S" element={<S />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

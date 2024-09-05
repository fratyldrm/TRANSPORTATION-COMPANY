import './Css/HouseToHouse.css'
import React from 'react';
import evdeneve from '../assets/evdeneve.jpg'; // Resim yolunu buraya ekliyoruz
import { useNavigate } from 'react-router-dom'; // useNavigate import et
import Pagestransport from './pagestransport'

const HouseToHouse = () => {

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
                <h1 style={{ marginTop: 130, padding: 22, color: 'white' }}>Evden Eve Nakliyat</h1>
                <p style={{ color: '#ffc107', paddingLeft: 22 }}>Anasayfa - Evden Eve Nakliyat</p>
            </div>

            {/* İçeriği sol ve sağa bölmek için flexbox kullanımı */}
            <div style={{ display: 'flex', width: '100%', height: 'calc(100vh - 300px)' }}>

                {/* Sol kısım (butonlar) */}
                {/* <div style={{ width: '25%', padding: '30px' }}>

                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '28ch', } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="standard-basic"
                            label="Sayfalar"
                            variant="standard"

                            InputLabelProps={{
                                style: { color: 'black', }
                            }}
                        />
                    </Box>

                    <Stack spacing={2} direction="column">
                        <Button
                            onClick={() => navigate(`/hizmetler/Evden Eve Nakliyat`)}
                            variant="outlined"
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                            endIcon={<ChevronRightIcon />}
                        >
                            Evden Eve Nakliyat
                        </Button>
                        <Button
                            onClick={() => navigate(`/hizmetler/Evden Eve Nakliyat`)}
                            variant="outlined"
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                            endIcon={<ChevronRightIcon />}
                        >
                            İşyeri Taşımacılığı
                        </Button>
                        <Button
                            variant="outlined"
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                            endIcon={<ChevronRightIcon />}
                        >
                            Asansörlü Taşımacılık
                        </Button>
                        <Button
                            variant="outlined"
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                            endIcon={<ChevronRightIcon />}
                        >
                            Ambalajlı Nakliyat
                        </Button>
                        <Button
                            variant="outlined"
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                            endIcon={<ChevronRightIcon />}
                        >
                            Sigortalı Nakliyat
                        </Button>
                        <Button
                            variant="outlined"
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                            endIcon={<ChevronRightIcon />}
                        >
                            Kurumsal Nakliyat
                        </Button>
                        <Button
                            variant="outlined"
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                            endIcon={<ChevronRightIcon />}
                        >
                            Şehir İçi Nakliyat
                        </Button>
                        <Button
                            variant="outlined"
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                            endIcon={<ChevronRightIcon />}
                        >
                            Şehirler Arası Nakliyat
                        </Button>
                        <Button
                            variant="outlined"
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                            endIcon={<ChevronRightIcon />}
                        >
                            Parça Eşya Taşıma
                        </Button>
                        <Button
                            variant="outlined"
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                            endIcon={<ChevronRightIcon />}
                        >
                            Eşya Ambalajlama
                        </Button>
                    </Stack>
                </div> */}

                <Pagestransport />

                {/* Sağ kısım (resim ve başlık) */}
                <div style={{ width: '75%', padding: '20px' }}>
                    <img src={evdeneve} alt="Evden Eve Nakliyat" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                    <h2 style={{ marginTop: '20px' }}>Evden Eve Nakliyat</h2>
                    <p>Evden eve nakliyat hizmetimiz ile eşyalarınızı güvenle taşımaktayız. Profesyonel ekibimiz ve kaliteli hizmet anlayışımız ile taşınma süreçlerinizi kolaylaştırıyoruz.</p>
                </div>
            </div>
        </div>
    );
};

// Buton stili
const buttonStyle = {
    width: '100%',
    padding: '10px 0',
    marginBottom: '10px',
    backgroundColor: '#042453',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: '16px'
};

export default HouseToHouse;
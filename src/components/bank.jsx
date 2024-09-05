import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import bankImage from '../assets/ispng.png';

const Bank = () => {
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
                <h1 style={{ marginTop: 130, padding: 22, color: 'white' }}>Banka Hesapları</h1>
                <p style={{ color: '#ffc107', paddingLeft: 22 }}>Anasayfa - Banka Hesapları</p>
            </div>

            {/* Card Section */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: '40px', justifyContent: "space-between", padding: 33 }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia

                            component="img"
                            height="140"
                            image={bankImage}  // Path to image in public folder
                            alt="Bank Image"

                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Türkiye İş Bankası
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
                                {`Ad Soyad: webmios\nPara Birimi: TL\nHesap No: 0000000000000\nIBAN: TR00000000000000000000`}
                            </Typography>
                        </CardContent>


                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia

                            component="img"
                            height="140"
                            image={bankImage}  // Path to image in public folder
                            alt="Bank Image"

                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Türkiye İş Bankası
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
                                {`Ad Soyad: webmios\nPara Birimi: TL\nHesap No: 0000000000000\nIBAN: TR00000000000000000000`}
                            </Typography>
                        </CardContent>


                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia

                            component="img"
                            height="140"
                            image={bankImage}  // Path to image in public folder
                            alt="Bank Image"

                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Türkiye İş Bankası
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
                                {`Ad Soyad: webmios\nPara Birimi: TL\nHesap No: 0000000000000\nIBAN: TR00000000000000000000`}
                            </Typography>
                        </CardContent>


                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}

export default Bank;

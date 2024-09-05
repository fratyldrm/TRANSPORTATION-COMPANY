import React from 'react';
import truckImage from '../assets/truck2.jpeg'; // Resim yolunu buraya ekliyoruz
import truckImage2 from '../assets/truck3.jpeg'; // Resim yolunu buraya ekliyoruz

const About2 = () => {
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
                <h1 style={{ marginTop: 130, padding: 22, color: 'white' }}>Hakkımızda</h1>
                <p style={{ color: '#ffc107', paddingLeft: 22 }}>Anasayfa - Hakkımızda</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '20px' }}>
                {/* Sol tarafta yer alan resim */}
                <div style={{ height: '25vh', width: '80%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${truckImage2})` }}>
                </div>

                {/* Sağ tarafta yer alan yazı */}
                <div style={{
                    height: 'auto',
                    width: '80%',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}>
                    <h2>Hakkımızda</h2>
                    <p>
                        1992‘den günümüze kadar yaptığı sayısız nakliye hizmeti ile edindiği tecrübeyi artırmış, aynı zamanda her problem için çözümü olan uzman elemanlar yetiştirmiştir.
                        Nakliye sektöründe şehir içi, şehirlerarası nakliyede kuşkusuz lider taşımacılık firmalarından biridir. Firmamız müşterilerine en iyi hizmeti, taşımada, depolama da, paketlemede, hızlı ve güvenilir bir şekilde üslendiği görevlerini başarı ile yerine getirerek, bu günlere gelmiş ve yine aynı tempo ve dikkatle çalışmalarına devam etmektedir.
                        Yılların verdiği tecrübe ile bugün evden eve, şehirden şehire nakliyat işlemlerini sorunsuz ve müşteri güvenini kazanarak yerine getirmektedir. DNA VİP Nakliye güçlü teknolojik altyapısı, bilgisayar sistemi ve donanımı, firma araçları ile müşterilerine hızlı ve doğru hizmeti vermek için her geçen gün kendini yenilemek ve geliştirmektedir.
                        Ayrıca müşterilerimizin bize her an ulaşabilecekleri ve yenilenmekte olan internet bağlantımız ile işlemler çağa uygun bir şekilde yürütülmektedir. Firmamızda istediğiniz her çeşit ve ebattaki kamyon, kamyonetler hizmet talebinize göre temin edilmektedir.
                        Kurumsal nakliye sektöründe yarattığımız güvenilirlik ve müşteri memnuniyetiyle, kaliteli bir şekilde müşterilerimize hizmet sunmaktayız. DNA VİP Nakliye bu vizyon doğrultusunda fabrikalara, devlet kurumlarına, bankalara, inşaat firmalarına ve alt yüklenicilere hizmet vermektedir.
                        DNA VİP Nakliye olarak, verdiğimiz hizmetin dünya standartlarına uygun, sağlam, güvenilir ve kaliteli olması bizim için öncelik taşımaktadır.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About2;

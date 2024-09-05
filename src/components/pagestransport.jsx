import './Css/HouseToHouse.css'
import React from 'react';
import evdeneve from '../assets/evdeneve.jpg'; // Resim yolunu buraya ekliyoruz
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'; // MUI Stack bileşeni
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom'; // useNavigate import et

const pagestransport = () => {
    return (
        <div style={{ width: '25%', padding: '30px' }}>

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
        </div>
    )
}

export default pagestransport
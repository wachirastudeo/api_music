const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const instruments = [
    {
        id: 1,
        name: "Yamaha C40II Classical Guitar",
        type: "String",
        brand: "Yamaha",
        image: "https://chiangraimusic-r2.tumwebsme.com/cms/pro1.webp",
        originalPrice: 9500,
        currentPrice: 7900
    },
    {
        id: 2,
        name: "Ibanez AEB5E Acoustic Bass",
        type: "String",
        brand: "Ibanez",
        image: "https://chiangraimusic-r2.tumwebsme.com/cms/pro1.webp",
        originalPrice: 12000,
        currentPrice: 10500
    },
    {
        id: 3,
        name: "Casio CDP-S160 Digital Piano",
        type: "Keyboard",
        brand: "Casio",
        image: "https://chiangraimusic-r2.tumwebsme.com/cms/pro1.webp",
        originalPrice: 25000,
        currentPrice: 22900
    },
    {
        id: 4,
        name: "Pearl Roadshow Drum Set",
        type: "Percussion",
        brand: "Pearl",
        image: "https://chiangraimusic-r2.tumwebsme.com/cms/pro1.webp",
        originalPrice: 32000,
        currentPrice: 29500
    },
    {
        id: 5,
        name: "Boss DS-1 Distortion Pedal",
        type: "Accessory",
        brand: "Boss",
        image: "https://chiangraimusic-r2.tumwebsme.com/cms/pro1.webp",
        originalPrice: 4500,
        currentPrice: 3900
    },
    {
        id: 6,
        name: "Fender Player Jazz Bass",
        type: "String",
        brand: "Fender",
        image: "https://chiangraimusic-r2.tumwebsme.com/cms/pro1.webp",
        originalPrice: 18000,
        currentPrice: 16500
    },
    {
        id: 7,
        name: "Taylor 214ce Acoustic Guitar",
        type: "String",
        brand: "Taylor",
        image: "https://chiangraimusic-r2.tumwebsme.com/cms/pro1.webp",
        originalPrice: 30000,
        currentPrice: 27900
    },
    {
        id: 8,
        name: "Gibson Les Paul Electric Guitar",
        type: "String",
        brand: "Gibson",
        image: "https://chiangraimusic-r2.tumwebsme.com/cms/pro1.webp",
        originalPrice: 45000,
        currentPrice: 41500
    },
    {
        id: 9,
        name: "Meinl Cajon Drum",
        type: "Percussion",
        brand: "Meinl",
        image: "https://chiangraimusic-r2.tumwebsme.com/cms/pro1.webp",
        originalPrice: 4800,
        currentPrice: 4300
    },
    {
        id: 10,
        name: "Akai MPK Mini MK3 MIDI Keyboard",
        type: "Keyboard",
        brand: "Akai",
        image: "https://chiangraimusic-r2.tumwebsme.com/cms/pro1.webp",
        originalPrice: 6500,
        currentPrice: 5900
    }
];

app.get('/api/instruments', (req, res) => {
    const { type, brand } = req.query;
    let results = instruments;

    if (type) {
        results = results.filter(item => item.type.toLowerCase() === type.toLowerCase());
    }

    if (brand) {
        results = results.filter(item => item.brand.toLowerCase() === brand.toLowerCase());
    }

    res.json(results);
});

app.get('/api/instrument-types', (req, res) => {
    const result = instruments.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1;
        return acc;
    }, {});
    res.json(result);
});

app.get('/', (req, res) => {
    res.send("🎵 Music Instruments API is running!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

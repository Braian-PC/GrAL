const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta principal redirige a introduction
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/introduction_home.html'));
});

// Mantener una ruta específica para introduction también
router.get('/introduction', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/introduction_home.html'));
});

router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/Home.html'));
});

router.get('/about-us', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/aboutUs.html'));
});

router.get('/arauak-fakultatea', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/arauak_fakultatea.html'));
});

router.get('/arauak-upv-ehu', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/arauak_UPV_EHU.html'));
});

router.get('/arauak', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/arauak.html'));
});

router.get('/autoebaluazioa', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/autoebaluazioa.html'));
});

router.get('/bibliografia', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/bibliografia.html'));
});

router.get('/egutegia', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/egutegia.html'));
});

router.get('/memoriak', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/memoriak.html'));
});

module.exports = router;
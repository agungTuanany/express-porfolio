const express = require('express');
const router = express.Router();
const fs = require('fs');

// Load JSON file
const rawdata = fs.readFileSync('./public/portfolio.json');
let data = JSON.parse(rawdata);
let portfolios = data.portfolio;

// map portfolios
portfolios = portfolios.map(item => {
  const { id } = item.sys;
  const { title, description, details } = item.fields;
  const img = item.img.fields.file.url;
  return { id, title, description, details, img };
});

// Portfolio Route
router.get('/', (req, res) => {
  const title = 'portfolio';

  res.render('myWork', {
    title,
    portfolio: portfolios

  });
});


module.exports = router;

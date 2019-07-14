const express = require('express');
const router = express.Router();
const fs = require('fs');

// Load JSON file
const rawdata = fs.readFileSync('./public/portfolio.json');
let data = JSON.parse(rawdata);
let portfolios = data.portfolio;

// map portfolios
const mapPortfolios = portfolios.map(item => {
  const { id } = item.sys;
  const { title, description, details } = item.fields;
  const img = item.img.fields.file.url;
  return { id, title, description, details, img };
});

// Portfolio Route
router.get('/', (req, res) => {
  const title = 'portfolio';
  // map portfolios

  res.render('myWork/index', {
    title,
    portfolio: mapPortfolios
  });
});

router.get('/details/:id', (req, res) => {
  const title = 'potfolio-details';
  // fetch single values from portfolios that match with requested param id
  for (let i = 0; i < mapPortfolios.length; i++) {
    if(mapPortfolios[i].id === req.params.id) {
      res.render('myWork/details', {
        title,
        img: mapPortfolios[i].img,
        titlePortfolio : mapPortfolios[i].title,
        details: mapPortfolios[i].details,
        description: mapPortfolios[i].description
      });
    };
  };
});

module.exports = router;

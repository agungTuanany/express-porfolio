const express = require('express');
const router = express.Router();


// Portfolio Route
router.get('/', (req, res) => {
  const title = 'portfolio';
  res.render('myWork', {
    title,
  });
});

module.exports = router;

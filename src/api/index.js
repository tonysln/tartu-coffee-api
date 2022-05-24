const express = require('express');

const markers = require('./markers');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Tartu Coffee API v1',
    date: new Date()
  });
});

router.use('/markers', markers);

module.exports = router;

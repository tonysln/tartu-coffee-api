const express = require('express');
const db = require('knex')(require('../../knexfile').production);

const router = express.Router();

// Get a list of all markers
router.get('/', (req, res) => {
  db('markers').then((qresult) => {
    if (qresult) {
      res.status(200).send(qresult);
    }
  });
});

// TODO: post to list of markers
// TODO: patch a marker (edit)

module.exports = router;

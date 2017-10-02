const models  = require('../models');
const express = require('express');
const router  = express.Router();

/**
 * Get the Shift list
 * @return List of all Shifts
 */
router.get('', (req, res) => {
  models.Shift.findAll()
  .then((fetchData) => {
    res.json(fetchData);
  });
});


module.exports = router;

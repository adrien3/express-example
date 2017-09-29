const models  = require('../models');
const express = require('express');
const router  = express.Router();

/**
 * Get the PlantConfig list
 * @return List of all plant configurations
 */
router.get('', (req, res) => {
  models.PlantConfig.findAll()
  .then((fetchData) => {
    res.json(fetchData);
  });
});


module.exports = router;

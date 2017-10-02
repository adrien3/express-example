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

/**
 * Create a PlantConfig
 * @param plantConfig : The PlantConfig object to create
 * @return Return the PlantConfig created
 */
router.post('', (req, res) => {
  if(req.body){
    models.PlantConfig.create(req.body).then(new_plantConfig => {
      res.json(new_plantConfig);
    })
    .catch((error) => {
      // error 
      res.json(error);
    });
  }
});

module.exports = router;

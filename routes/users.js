const models  = require('../models');
const express = require('express');
const router  = express.Router();

/**
 * Return the users list, can be filtered by user role
 * @param role (optionnel) : supervisor | operator | plant manager
 * @return The user list, filtered or not
 */
router.get('', (req, res) => {
  let query = {};
  if(req.query.role){
    query = {
      role: req.query.role
    };
  }

  models.User.findAll({
    where: query
  })
  .then((fetchData) => {
    res.json(fetchData);
  });
});


module.exports = router;

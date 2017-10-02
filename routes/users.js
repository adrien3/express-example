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


/**
 * Return the user by the given id
 * @param user_id : The user id to get the user object
 * @return Return the user object by the id
 */
router.get('/:user_id', (req, res) => {
    models.User.findAll({
      where: {
        id : req.params.user_id
      }
    })
    .then((fetchData) => {
      res.json(fetchData);
    });
});


/**
 * Create a new user
 * @param user : The user object to create
 * @return Return the new user created
 */
router.post('', (req, res) => {
  if(req.body){
    models.User.create(req.body).then(new_user => {
      res.json(new_user);
    })
    .catch((error) => {
      // error 
      res.json(error);
    });
  }
});


module.exports = router;

const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.post('/create', (req, res) => {
  models.User.create({
    username: req.body.username
  })
  .then((user) => {
    // success
    res.json(user);
  })
  .catch((error) => {
    // error 
    res.json(error);
  });
});

router.get('/:user_id/tasks/:task_id/destroy', (req, res) => {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  })
  .then(() => {
    // success
  })
  .catch((error) => {
    // error 
    res.json(error);
  });
});


module.exports = router;

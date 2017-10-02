const models  = require('../models');
const express = require('express');
const router  = express.Router();

/**
 * Return a list of all tasks
 * @return Return an all tasks array
 */
router.get('', (req, res) => {

  models.Task.findAll()
  .then((fetchData) => {
    res.json(fetchData);
  });
});


/**
 * Return a task object by given id
 * @param id_task : Id to find task object to return
 * @return Return task object by id
 */
router.get('/:id_task', (req, res) => {
    models.Task.findAll({
      where: {
        id : req.params.id_task
      }
    })
    .then((fetchData) => {
      res.json(fetchData);
    });
});



module.exports = router;

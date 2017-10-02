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


/**
 * Create a new task, return the new task object
 * @param task : Task object to create
 * @return New task object created
 */
router.post('', (req, res) => {
  if(req.body){
    models.Task.create(req.body).then(new_task => {
      res.json(new_task);
    })
    .catch((error) => {
      // error 
      res.json(error);
    });
  }
});


/**
 * Task object edition by given id, return modified task object
 * @param id_task: Id to find task object to modify
 * @param task : Task object to create
 * @return Return task object modified
 */
router.put('/:id_task', (req, res) => {
  if(req.body){
    models.Task.update(req.body, { 
      where: { id: req.params.id_task }
     }).then(edit_task => {
        models.Task.findById(req.params.id_task).then((edit_task) => {
          res.json(edit_task);
        });
    })
    .catch((error) => {
      // error 
      res.json(error);
    });
  }
});



/**
 * Close object task by given id
 * @param id_task: Id to find the task object to close
 * @return Task object closed
 */
router.delete('/:id_task', (req, res) => {
    models.Task.destroy({
      where: { id:  req.params.id_task }
    }).then(delete_task => {
      res.json(delete_task);
    })
    .catch((error) => {
      // error 
      res.json(error);
    });
});

/**
 * Duplication of an existing task object, return the task object clone
 * @param id_task : Id to find the task object to duplicate
 * @return Return duplicate task object by given id
 */
router.post('/:id_task/duplicate', (req, res) => {
    models.Task.findOne({
      where: {
        id : req.params.id_task
      }
    }).then((task) => {
      // empty the ID and the createdAt before the duplication
      task.dataValues.id = null;
      task.dataValues.createdAt = null;
      models.Task.create(task.dataValues).then(new_task => {
        res.json(new_task);
      })
    .catch((error) => {
      // error 
      res.json(error);
    });
    })
    .catch((error) => {
      // error 
      res.json(error);
    });
});

/**
 * Validation of a task object [mobile app access], return task object modified
 * @param id_task : Id to find the task object to change the status
 * @return Return task object modified [mobile app access]
 */
router.put('/:id_task/validate', (req, res) => {
    models.Task.findOne({
      where: {
        id : req.params.id_task
      }
    }).then((task) => {
      // change the status to TRUE to validate the Task
      task.dataValues.status = true;

      models.Task.update(task.dataValues, { 
      where: { id: req.params.id_task }
     }).then(edit_task => {
        models.Task.findById(req.params.id_task).then((edit_task) => {
          res.json(edit_task);
        })
        .catch((error) => {
          // error 
          res.json(error);
        });
    })
    .catch((error) => {
      // error 
      res.json(error);
    });
  })
  .catch((error) => {
    // error 
    res.json(error);
  });
});

module.exports = router;

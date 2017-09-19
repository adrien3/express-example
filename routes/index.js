var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    console.log("INDEX");
    res.json({ message: 'hooray! welcome to our api!' });
  });
});

module.exports = router;

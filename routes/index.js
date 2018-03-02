var express = require('express');
var controller = require('../controller').indexController;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  controller.getIndex(req, res);
});

module.exports = router;

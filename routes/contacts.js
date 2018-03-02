var express = require('express');
var router = express.Router();
var controller = require('../controller').indexController;

/* GET users listing. */
router.post('/', function(req, res, next) {
  controller.addContact(req, res);
});

router.get('/', function(req, res, next){
  res.render('contacts');
});

module.exports = router;

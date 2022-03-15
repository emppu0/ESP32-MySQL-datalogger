var express = require('express');
var router = express.Router();
//this works

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello');
});

module.exports = router;
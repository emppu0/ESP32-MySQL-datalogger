var express = require('express');
var router = express.Router();
const db = require('../database');

router.get('/', function(req, res, next) {

  db.query("select value1, value2, value3, reading_time from Data1 ORDER BY reading_time DESC LIMIT 10", function(err, result){
    if(err) {
      throw err;
    } else {
      res.render('data_table', {obj: result});
    }

  });
  
});

module.exports = router;
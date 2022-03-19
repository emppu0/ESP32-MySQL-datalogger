var express = require('express');
var router = express.Router();
const db = require('../database');

var temperature;
var val2;
var val3;
var time;

router.get('/', function(req, res, next) {

  db.query("select value1, value2, value3, reading_time from Data1 ORDER BY id DESC LIMIT 1", function(err, result){
    if(err) {
      throw err;
    } else {
      
      temperature = result[0].value1;
      humidity = result[0].value2;
      tvoc = result[0].value3;
      time = result[0].reading_time;

      res.render('charts', {obj: temperature, obj2: time, obj3: humidity});
    }

  });
  
});

module.exports = router;
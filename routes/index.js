var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const db = require('../database');

var temperature;
var val2;
var val3;
var time;

router.get('/', function(req, res, next) {

  db.query("select value1, value2, reading_time from Data1 ORDER BY id DESC LIMIT 1", function(err, result){
    if(err) {
      throw err;
    } else {
      
      temperature = result[0].value1;
      humidity = result[0].value2;
      time = result[0].reading_time;

      res.render('data', {obj: temperature, obj2: time, obj3: humidity});
    }

  });
  
});

module.exports = router;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');


const sensorRouter = require('./routes/sensor');
const tableRouter = require('./routes/table');
const indexRouter = require('./routes/index');
//const basicAuth = require('express-basic-auth');


var app = express();
//app.use(basicAuth({users: { 1 : 1}}))
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname + 'public')));
app.use(helmet());
app.use(cors());


app.use('/index', indexRouter);
app.use('/sensor', sensorRouter);
app.use('/table', tableRouter);

app.get('/about', function(req, res) {
  res.render('page');
});

module.exports = app;

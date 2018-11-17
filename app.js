var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var image = "";
var db = require('./config/db')
// console.log(db)

var storage = multer.diskStorage({
  destination: function(){
    console.log("123")
  }
})

var con = mysql.createConnection(db)
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

console.log(con)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var uploadRuter = require('./routes/upload');
var importData = require('./routes/importData');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/import-data', importData);
app.use('/users', usersRouter);
app.use('/upload', uploadRuter);


app.use(function(req, res, next){
  var err = new Error("kosong")
  err.status = 404;
  next(err)
})

app.get('/ejs', function(req, res) {
  res.send('index');
});

// // catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

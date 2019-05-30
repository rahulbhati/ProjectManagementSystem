var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');


var usersRouter = require('./routes/users');

var projectapp = express();



// view engine setup
projectapp.set('views', path.join(__dirname, 'views'));
projectapp.engine('html', require('ejs').renderFile);
projectapp.set('view engine', 'html');

projectapp.set('isLocal', true);

projectapp.use(logger('dev'));
projectapp.use(express.json());
projectapp.use(express.urlencoded({ extended: false }));
projectapp.use(cookieParser());
projectapp.use(express.static(path.join(__dirname, 'public')));

projectapp.use('/', indexRouter);
projectapp.use('/users', usersRouter);

// catch 404 and forward to error handler
projectapp.use(function(req, res, next) {
  next(createError(404));
});

// error handler
projectapp.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// CRUD operations


module.exports = projectapp;

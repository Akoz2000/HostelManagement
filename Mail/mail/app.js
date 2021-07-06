var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nodeMailer = require('nodemailer');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();



var emailRouter = require('./routes/email-route');
app.use('/', emailRouter);




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);




module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var ejs = require("ejs");
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var indexRouter = require('./routes/index');


var app = express();
//app.use(express.static('public'))
//app.use('/css',express.static(__dirname + 'public/css'))
//app.use('/js',express.static(__dirname + 'public/js'))
//app.use('/img',express.static(__dirname + 'public/img'))


app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    console.log('server listening on port ' + server.address().port);
});


// view engine setup
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ 
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));



app.use(express.static(path.join(__dirname, 'public')));
app.use("/route",express.static('public'))
app.use('/', indexRouter);


// catch 404 and forward to error handler
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



var loginRouter = require('./routes/login-route');
var dashboardRouter = require('./routes/dashboard-route');
var dashboardRouteradmin = require('./routes/dashboard-admin-route');
var logoutRouter = require('./routes/logout-route');
var adminloginRouter = require('./routes/admin-login-route');
var usersRouter = require('./routes/admin-insert');
var usersRouter2 = require('./routes/new');
var complaintRouter = require('./routes/complaint');
var TableRouter = require('./routes/user-list');
var TableRouter2 = require('./routes/warden');
var TableRouter3 = require('./routes/alloc-form');
var complaintRouter2 = require('./routes/complainview');
var emailRouter = require('./routes/email-route');




app.use('/', emailRouter);
app.use('/',TableRouter);
app.use('/',TableRouter2);
app.use('/alloc-form',TableRouter3);
app.use('/complaint', complaintRouter);
app.use('/', complaintRouter2);
app.use('/admin-insert', usersRouter);
app.use('/new', usersRouter2);
app.use('/', loginRouter);
app.use('/', dashboardRouter);
app.use('/', dashboardRouteradmin);
app.use('/', logoutRouter);
app.use('/', adminloginRouter);





module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var livereload = require('livereload')
var connectLiveReload = require('connect-livereload')
var nunjucks = require('nunjucks');


const publicDirectory = path.join(__dirname,'public');
var liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicDirectory);
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  },100);
});
// console.log(publicDirectory)


var app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true // Disable cache for development
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','nunjucks');

app.use(connectLiveReload());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicDirectory));
app.use(express.static('public/javascripts'))


var indexRouter = require('./routes/index');
// ROUTES ==========================================

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    title:'Whoops!',
    status:err
  });
});

module.exports = app;

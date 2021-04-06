var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
const routes = require('./server/routes/router.js');
const graph = require('./server/graphql/index.js')
const {interceptor} = require('./server/interceptor.js')
const log = require('./logs/log.js')

const app = express();


app.engine('.html', ejs.__express);
app.set('views', __dirname + '/static/views');
app.set('view engine', 'html');


logger.format('dev', '[dev] :method :url :status');
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));
// app.use('/server',express.static(path.join(__dirname, 'server')));

// 允许跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  
  // res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//请求拦截，log记录，并获取请求url和token
app.use(interceptor, function (req, res, next) {
  next();
  
})

app.use('/node', routes);
app.use('/node', graph)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  log.log(err.message)
  res.render('error');
});

module.exports = app;

const express       = require('express');
const path          = require('path');
const logger        = require('morgan');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const helmet        = require('helmet');

const routes              = require('./routes/index');
const routes_users        = require('./routes/users');
const routes_plantConfig  = require('./routes/plant_config');
const routes_shift        = require('./routes/shift');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use('/', routes);
app.use('/users', routes_users);
app.use('/plantconfigs', routes_plantConfig);
app.use('/shifts', routes_shift);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);

  res.json({ message: err.message, 'error' : (app.get('env') === 'development') ? err : {} });
});


module.exports = app;

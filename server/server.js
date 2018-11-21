var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var user = require('./routes/user');
var route = require('./routes/route');
var post = require('./routes/post')
var apartment = require('./routes/apartment');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../public'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

// mongoose.connect('mongodb://1453039:chautinhtri123@ds145083.mlab.com:45083/apartment_social_network', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/apartment-social-network', { useNewUrlParser: true });

app.use(session({
  secret: 'MySuperSecret',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { path: '/', httpOnly: true, maxAge: 1000 * 60 * 60 * 24},
  rolling: true
}));

app.use('/', route);
app.use('/members', user);
app.use('/post', post)
app.use('/apartment', apartment);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports=app;

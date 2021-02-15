const express = require('express');
var server = express();
var bodyParser = require('body-parser');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');
mongoose.connect('mongodb://simpleUser:123456@mongodb:27017/simpleDb?authSource=admin', {useNewUrlParser: true});

server.use(passport.initialize());
server.use(bodyParser.urlencoded({ extended: true }));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  done(null, id);
});

passport.use(new LocalStrategy(
  function (username, password, done) {
    var user = { username: username };
    return done(null, user);
  }
));

server.get('/', function(req, res) {
  res.send('Hello World');
});

server.post('/login', passport.authenticate('local', { failureRedirect: 'failure' }), function (req, res) {
  res.send('access granted');
});

server.listen(3000, function() {
  console.log('Example app listening on port 3000');
})
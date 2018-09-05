const express = require('express');
const parser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

const routes = require('../routes.js');

app.use('/retire', routes);

passport.use(new LocalStrategy(function(username, password, done) {
  knex.select('username').from('users')
  .where({username : username})
  .asCallback(function(err, user) {
    if (err) {console.log(err)}
    if (!user) {
      return done(null, false, { message: 'No such user.'})
    }
    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect password.'})
    }
    return done(null, user)
  })
}))

var port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Example app listening on port ${port}!`));
var express = require('express');
var router = express.Router();
const middleware = require('../common/middleware')

/* GET users listing. */

router.get('/login', function(req, res, next) {
  res.send('User Login Successful');
});

router.get('/register', function(req, res, next) {
  res.send('User Registration Successful');
});

router.get('/logout', function(req, res, next) {
  res.send('Logout Successful');
});

module.exports = router;

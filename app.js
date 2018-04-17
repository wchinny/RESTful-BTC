var express = require('express');
var app = express();
var db = require('./db');

// var UserController = require('./user/UserController');
var CoinController = require('./coin/CoinController');
app.use('/coins', CoinController);
// app.use('/users', UserController);

module.exports = app;
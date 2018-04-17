var express = require('express');
var app = express();
var db = require('./db');

var CoinController = require('./coin/CoinREST');
app.use('/coins', CoinController);

module.exports = app;
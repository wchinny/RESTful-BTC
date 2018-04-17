var mongoose = require('mongoose');  
var CoinSchema = new mongoose.Schema({  
  name: String,
  abbreviation: String,
  price_usd: Number,
  time: Number
});
mongoose.model('Coin', CoinSchema);

module.exports = mongoose.model('Coin');
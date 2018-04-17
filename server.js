var app = require('./app');
var port = process.env.PORT || 3000;

var Coin = require('./coin/Coin');

const request = require("request");
const url = "https://api.coinmarketcap.com/v1/ticker/bitcoin/";

function refresh()
{ 

    request.get(url, (error, response, body) => {
		let json = JSON.parse(body);
		// console.log(json);
		console.log(json[0].price_usd);
		Coin.create({
			name: json[0].name,
			abbreviation: json[0].symbol,
			price_usd: json[0].price_usd,
			time: json[0].last_updated
		});
	});

    setTimeout(refresh, 120000);
}

refresh();

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
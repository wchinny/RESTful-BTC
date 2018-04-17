var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Coin = require('./Coin');


router.post('/', function (req, res) {
    Coin.create({
            name : req.body.name,
            abbreviation : req.body.abbreviation,
            price_usd : req.body.price_usd
        }, 
        function (err, coin) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(coin);
        });
});


router.get('/', function (req, res) {
    Coin.find({}, function (err, coins) {
        if (err) return res.status(500).send("There was a problem finding the coins.");
        res.status(200).send(coins);
    });
});


router.get('/:id', function (req, res) {
    Coin.findById(req.params.id, function (err, coin) {
        if (err) return res.status(500).send("There was a problem finding the coin.");
        if (!coin) return res.status(404).send("No coin found.");
        res.status(200).send(coin);
    });
});


router.delete('/:id', function (req, res) {
    Coin.findByIdAndRemove(req.params.id, function (err, coin) {
        if (err) return res.status(500).send("There was a problem deleting the coins.");
        res.status(200).send("Coin: "+ coin.name +" was deleted.");
    });
});


router.put('/:id', function (req, res) {
    Coin.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, coin) {
        if (err) return res.status(500).send("There was a problem updating the coin.");
        res.status(200).send(coin);
    });
});


module.exports = router;
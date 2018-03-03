var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

 Coin = require('./models/Coin');

 app.use(express.static(__dirname + "/client"));
 
 app.use(bodyParser.json());

 //connect to Mongoose

mongoose.connect('mongodb://localhost:27017/cyptonic');
var db = mongoose.connection;
 
db.once('connected', function() {
	console.log("Database connected successfully")
});

 
app.get('/', function (req, res) {
    res.send('Please use /api/books or ai/genre');
});


app.get('/api/coins', function (req, res) {
    Coin.getCoins(function (err, coin) {
      console.log(coin)
        if (err) {
            throw err;

        }
        res.json(coin);

    });
});


app.post('/api/coins', function (req, res) {
    var coin =req.coin;
    Coin.addCoins(coin,function (err, coin) {

        if (err) {
            throw err;

        }
        res.json(coin);

    });
});




app.listen(3000);
console.log('Example app listening on port 3000!');

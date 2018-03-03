var mongoose = require('mongoose');

//Genre schema
var coinSchema = mongoose.Schema({
    name: {
        type: String,
        
    },

    description:{
        type: String,
        
    },

    symbol: {
        type: String,
        
    },

    price: {
        type: Number,
        
    },
    image_url: {
        type: String,
        
    }


});

var Coin = module.exports = mongoose.model('coin',coinSchema);

module.exports.getCoins = function (callback, limit) {
    Coin.find(callback).limit(limit);

}

module.exports.addCoins= function(coin,callback){
    Coin.create(coin ,callback);
    
    }



//db.coindata.insert({name:'Ripple',description:'sattoshi nakomota',symbol:'BTC',price:'10000',image_url:'https://bitcoin.org/img/icons/logotop.svg'})

//db.coindata.insert({name:'Ripple',description:'sattoshi nakomota',symbol:'BTC',price:'10000',image_url:'https://bitcoin.org/img/icons/logotop.svg'})

//db.coins.insert({name:'Neo',description:'china dapps ',symbol:'BTC',price:'10000',image_url:'https://bitcoin.org/img/icons/logotop.svg'})
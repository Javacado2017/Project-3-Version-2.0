// DEPENDENCIES
const axios = require('axios');
const moment = require('moment');
const config = require('../../config');


// var CryptoTickerSymbol = {
//     BTC: {
//         coinName: 'BitCoin',
//         iconClass: 'cf cf-btc'
//     },
//     ETH: {
//         coinName: 'Etherium',
//         iconClass: 'cf cf-eth'
//     },
//     LTC: {
//         coinName: 'Litecoin',
//         iconClass: 'cf cf-ltc'
//     }
// };

//TickerSymbol is default
var CryptoPriceTrendsAPI = {
    
    runQuery: function(tickerSymbol = 'BTC') {

        const APIKey = config.cyrptoTrendsAPI; 
        const baseURL = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=' + tickerSymbol + '&market=USD&apikey=' + APIKey;
        
        return new Promise((resolve, reject) => {
          axios.get(baseURL)
            .then(function(response) {
                var objectTrends = response.data['Time Series (Digital Currency Daily)'];
                
                const priceTrends = [];
                let count = 0;

                if (Object.keys(objectTrends).length >0) {

                    for (let key in objectTrends){
            
                        var priceData = objectTrends[key]['4a. close (USD)']
            
                        priceTrends.push({
                            d: moment(key).format('MMM DD'),
                            p: parseFloat(priceData).toLocaleString('en-US',{ style: 'currency', currency: 'USD' }),
                            x: count,
                            y: priceData
                        });

                        count++;
                      
                        if (count > 30) {
                            break;
                        }
                        
                    }
                    
                    return resolve(priceTrends);
                } else {
                    
                    return reject('Alphavantage API: No historical price data trends found.');
                }
            })
            .catch((error) => {
                
              reject(error);
            });
        });
    },
};


var CryptoPriceCurrentAPI = {
    runQuery: function(tickerSymbol = 'BTC') {
        
        const APIKey = config.cyrptoTrendsAPI; 
        const baseURL = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=' + tickerSymbol + '&market=USD&apikey=' + APIKey;
            
        return new Promise((resolve, reject) => {
          axios.get(baseURL)
            .then(function(response) {
               
                var objectCurrent = response.data['Time Series (Digital Currency Intraday)'];
               
                const priceCurrent = [];
                let count = 0;
               
                if (Object.keys(objectCurrent).length > 0) {

                    for (let key in objectCurrent){
                        
                        var priceData = objectCurrent[key]['1a. price (USD)']

                        priceCurrent.push({
                            price: parseFloat(priceData.replace(/,/g, '')),
                            currentPrice: parseFloat(priceData.replace(/,/g, '')),
                            updatedAt: moment(key).format('MMM DD YYYY')
                        });
                        count++;
                        console.log(priceCurrent);
                        if (count > 0) {
                            break;
                        }
                    }
                    return resolve(priceCurrent);
                } else {
                    return reject('Alphavantage API: No current price data found.');
                }
            })
            .catch((error) => {
              reject(error);
            });
        });
    },
};

module.exports =  {
//    CryptoTickerSymbol,
    CryptoPriceTrendsAPI,
    CryptoPriceCurrentAPI
};

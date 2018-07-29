// DEPENDENCIES
const axios = require('axios');
const moment = reuire('moment');
const config = require('../../config');


var CryptoPriceTrendsAPI = {
    runQuery: function(tickerSymbol) {
  
        const APIKey = config.cyrptoTrendsAPI; 
        const baseURL = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=' + tickerSymbol + '&market=USD&apikey=' + APIKey;
        
        return new Promise((resolve, reject) => {
          axios.get(baseURL)
            .then(function(response) => {
    
                var objectTrends = response["Time Series (Digital Currency Daily)"];
                const priceTrends = [];
                let count = 0;

                if (Object.keys(objectTrends).length >0) {

                    for (let key in objectTrends){
            
                        var priceData = objectTrends[key]["4a. close (USD)"]
            
                        priceTrends.push({
                            d: moment(key).format('MMM DD'),
                            p: parseFloat(priceData).toLocaleString('en-US',{ style: 'currency', currency: 'USD' }),
                            x: count,
                            y: objectTrends[key]["4a. close (USD)"]
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
    runQuery: function(tickerSymbol) {
  
        const APIKey = config.cyrptoTrendsAPI; 
        const baseURL = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=' + tickerSymbol + '&market=USD&apikey=' + APIKey;
        
        return new Promise((resolve, reject) => {
          axios.get(baseURL)
            .then(function(response) => {

                var objectCurrent = response['Time Series (Digital Currency Intraday)'];
                const priceCurrent = [];
                let count = 0;

                if (Object.keys(objectCurrent).length > 0) {

                    for (let key in objectCurrent){
            
                        priceCurrent.push({
                            price: parseFloat(objectCurrent[key]["1a. price (USD)"].replace(/,/g, '')),
                            currentPrice: parseFloat(objectCurrent[key]["1a. price (USD)"].replace(/,/g, '')),
                            updatedAt: momment(objectCurrent).format('MMM DD, YYYY HH:MM:SS')
                        });
      
                        count++;
                      
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

module.exports = CryptoPriceTrendsAPI;
module.exports = CryptoPriceCurrentAPI;
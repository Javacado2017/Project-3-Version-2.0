// DEPENDENCIES
const axios = require('axios');
const config = require('../../config');

var CryptoTrendsAPI = {
    runQuery: function(tickerSymbol) {
  
        const APIKey = config.cyrptoTrendsAPI; 
        const baseURL = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=' + tickerSymbol + '&market=USD&apikey=' + APIKey;
        
        return new Promise((resolve, reject) => {
          axios.get(baseURL)
            .then(function(getTrendData) => {

                if (response.data.length > 0) {
    
                    var responses = [];
    
                    for (var i = 0; i < 30; i++) {
                        var article = response.data.articles[i];
                        var article = {
                            title: article.title,
                            description: article.description,
                            url: article.url,  
                            url: article.urlToImage,
                            date: article.publishedAt.split('T')[0],
                            articleID: article.publishedAt
                        };

                        responses.push(article);
                    }
                    return resolve(responses);

                } else {
                    return reject('Alphavantage API: No data trends found.');
                }
            })
            .catch((error) => {
              reject(error);
            });
        });
    },
};


var CryptoCurrentAPI = {
    runQuery: function(tickerSymbol) {
  
        const APIKey = config.cyrptoTrendsAPI; 
        const baseURL = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADA&symbol=' + tickerSymbol + '&market=USD&apikey=' + APIKey;
        
        return new Promise((resolve, reject) => {
          axios.get(baseURL)
            .then(function(getTrendData) => {

                if (response.data.length > 0) {
    
                    var responses = [];
    
                    for (var i = 0; i < 30; i++) {
                        var article = response.data.articles[i];
                        var article = {
                            title: article.title,
                            description: article.description,
                            url: article.url,  
                            url: article.urlToImage,
                            date: article.publishedAt.split('T')[0],
                            articleID: article.publishedAt
                        };

                        responses.push(article);
                    }
                    return resolve(responses);

                } else {
                    return reject('Alphavantage API: No data trends found.');
                }
            })
            .catch((error) => {
              reject(error);
            });
        });
    },
};

module.exports = CryptoTrendsAPI;
module.exports = CryptoCurrentAPI;
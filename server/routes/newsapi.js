// DEPENDENCIES
const axios = require("axios");
const config = require("../../config");

var CryptoNewsAPI = {
    runQuery: function() {
  
        const APIKey = config.cryptoNewsAPI; 
        const baseURL = "https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=" + APIKey;
        
        return new Promise((resolve, reject) => {
          axios.get(baseURL)
            .then(function(response) {

                if (response.data.articles.length > 0) {
    
                    var newsArticles = [];
    
                    for (var i = 0; i < 10; i++) {
                        var article = response.data.articles[i];
                        var article = {
                            title: article.title,
                            description: article.description,
                            url: article.url,  
                            image: article.urlToImage,
                            date: article.publishedAt.split("T")[0],
                            articleID: article.publishedAt
                        };

                        newsArticles.push(article);
                    }
                    return resolve(newsArticles);

                } else {
                    return reject("Crypto Coins News: No news articles found.");
                }
            })
            .catch((error) => {
              reject(error);
            });
        });
    },

    getSaved: function() {
        return axios.get("/api/saved");
    },

    postSaved: function(article) {
        return axios.post("/api/saved", article);
    },

    deleteSaved: function(articleID) {
        return axios.delete("/api/saved/" + articleID);
    }

};

module.exports = CryptoNewsAPI;



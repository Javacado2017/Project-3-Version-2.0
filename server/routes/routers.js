const express = require('express');

const CryptoTickerSymbol = require('./cryptoapi.js').CryptoTickerSymbol;
const CryptoPriceTrendsAPI = require('./cryptoapi.js').CryptoPriceTrendsAPI;
const CryptoPriceCurrentAPI = require('./cryptoapi.js').CryptoPriceCurrentAPI;
const CryptoNewsAPI = require('./newsapi.js').CryptoNewsAPI;

const router = new express.Router();

// CryptoAPI: ticker symbols
router.get('/api/tickerSymbol', (req, res) => {
    
    CryptoTickerSymbol.runQuery()
    .then(result => {
        return res.status(200).json(result);
    })
    .catch();
});

// CryptoAPI: price trends
router.get('/api/priceTrends', (req, res) => {
    
    CryptoPriceTrendsAPI.runQuery()
    .then(result => {
        return res.status(200).json(result);
    })
    .catch();
});

// CryptoAPI: price current
router.get('/api/priceCurrent', (req, res) => {
    
    CryptoPriceCurrentAPI.runQuery()
    .then(result => {
        return res.status(200).json(result);
    })
    .catch();
});

// NewsAPI: news articles
router.get('/api/newsArticles', (req, res) => {
    
    CryptoNewsAPI.runQuery()
    .then(result => {
        return res.status(200).json(result);
    })
    .catch();
});


module.exports = router;
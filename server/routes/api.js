const express = require('express');
const CryptoPriceTrendsAPI = require('./cryptoapi.js').CryptoPriceTrendsAPI;

const router = new express.Router();

router.get('/api/priceTrends', (req, res) => {
    console.log('i hit the api file');
    CryptoPriceTrendsAPI.runQuery()
    .then(result => {
        return res.status(200).json(result);
    })
    .catch();
});



module.exports = router;
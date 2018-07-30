// CREATING SERVER CONNECTION FRAMEWORK

// DEPENDENCY: 
// General dependencies
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

// EXPRESS APP:
// Setup express app
const app = express();

// APP ROUTES:
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

//API ROUTES
app.use(require('./server/routes/api'));

// SERVER FUNCTIONS: 
// Tells app to open and start server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});

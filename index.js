// CREATING SERVER CONNECTION FRAMEWORK

// DEPENDENCIES
// General dependencies
const express = require('express');
    // const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

// Oauth dependencies 
const cookieParser = require('cookie-parser');
const passport = require('passport');
const config = require('./config');

// EXPRESS APP
const app = express();

// STATIC FILES 
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// DATABASE CALLS
require('./server/models').connect(config.dbUri);

    // var User = require('./server/models/user');

// Middleware functions to: 
    
    // // Tell app to parse cookie headers sent between cilent and server
    // app.use(cookieParser());

// Tell app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

    // // Tell app to authenticate sessions between cient and server
    // app.use(session({
    //     secret: 'some secret password',
    //     resave: true,
    //     saveUninitialized: false
    // }));

// PASSPORT FUNCTIONS: 
// Initialize passport session
app.use(passport.initialize());
    
    //app.use(passport.session());

    // // Serialize/Deserialize passport user 
    // passport.serializeUser((user, done) => {
    //     done(null, user._id);
    //   });
    
    // passport.deserializeUser((_id, done) => {
    //     User.findById(_id).then((user) => {
    //         done(null, user);
    //     });
    // });

// Passport local & local-signup strategy
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// Middleware authentication check
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// ROUTES
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// SERVER START
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});

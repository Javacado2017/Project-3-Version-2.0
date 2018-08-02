// CREATE CONNECTION TO SERVER

// DEPENDENCIES
const mongoose = require('mongoose');

// MONGODB CONNECTION
module.exports.connect = uri => {
  mongoose.connect(uri);

  mongoose.Promise = global.Promise;
  mongoose.connection.on('error', err => {
    console.error(`Mongoose connection: ${err}`);
    process.exit(1);
  });

  // Loads the models
  require('./user');
};

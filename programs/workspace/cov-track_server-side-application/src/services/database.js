/* eslint-disable no-console */

import mongoose from 'mongoose';

import constants from './config';

// Remove the warning with Promise
mongoose.Promise = global.Promise;

// Connect the db with the url provided
try {
  mongoose.connect(constants.MONGO_URL);
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    throw e;
  });

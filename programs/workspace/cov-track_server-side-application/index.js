/* eslint-disable no-console */

import express from 'express';
import cors from 'cors';

import constants from './src/services/config';
import './src/services/database';
import middlewaresConfig from './src/services/middlewares';
import userRoutes from './src/routes/covTrackRoutes';
import { authJwt } from './src/services/auth';

// Temp
import mongoose from 'mongoose';
import { CitizenSchema } from "./src/models/covTrackModel";

const Citizen = mongoose.model("Citizen", CitizenSchema);
const fs = require('fs');

const apiRoutes = () => {
  app.use('/api', userRoutes);
};

const app = express();
app.use(cors());

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Running...');
});

// Setup express static middleware to look for files in the api directory for all requests starting with /api
app.use('/data', authJwt, express.static('data'), (req, res) => {
  // Optional 404 handler
  res.status(404);
  res.json({ error: { code: 404 } })
});

// const content = 'Some content!'

const fileWrite = (content) => {
  fs.writeFile('./data/newtest.txt', content, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
}

app.get('/writedata', (req, res) => {
  fileWrite("???");
  res.send('File written!');
});

app.get('/test', authJwt, (req, res) => {
  res.send('Private route accessed!');
});

apiRoutes(app);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
      Server running on port: ${constants.PORT}
      ---
      Running on ${process.env.NODE_ENV}
      ---
      Make something great
    `);
  }
});

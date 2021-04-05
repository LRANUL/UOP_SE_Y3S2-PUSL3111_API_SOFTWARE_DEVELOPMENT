/* eslint-disable no-console */

import express from 'express';
import cors from 'cors';

import constants from './src/services/config';
import './src/services/database';
import middlewaresConfig from './src/services/middlewares';
import userRoutes from './src/routes/covTrackRoutes';
import { authJwt } from './src/services/auth';

const apiRoutes = () => {
  app.use('/protected', userRoutes);
};

const app = express();
app.use(cors());

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Running...');
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

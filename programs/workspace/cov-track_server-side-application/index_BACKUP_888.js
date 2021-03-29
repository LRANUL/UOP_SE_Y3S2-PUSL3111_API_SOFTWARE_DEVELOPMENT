import express from "express";
//import routes from "./src/routes/covTrackRoutes";
import mongoose from "mongoose";
import passport from 'passport';
import bodyParser from "body-parser";
import cors from "cors";
import UserModel from './src/models/authModel';

const app = express();
const PORT = 5000;

app.use(cors());

mongoose.Promise = global.Promise; //allows Asynchronous Operations

<<<<<<< HEAD
mongoose.connect( // MongoDB mongoose connection
  "mongodb+srv://developer:OWBFpoXsPEQWjKgK@covtrack-cluster-1.tpmbm.mongodb.net/CovTrack_DB_Primary?retryWrites=true&w=majority",
//  "mongodb://localhost:27017/covtrackDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
=======
mongoose.connect("mongodb://127.0.0.1:27017/covtrackDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

require('./src/auth/auth');

const routes = require('./src/routes/authRoutes');
const secureRoute = require('./src/routes/secureRoutes');
//const secureRoute = require('./src/routes/covTrackRoutes');
>>>>>>> local2

app.use(bodyParser.urlencoded({ extended: true })); // Body parse for server
app.use(bodyParser.json());

app.use('/', routes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// Handle errors.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));

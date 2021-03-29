import express from "express";
import routes from "./src/routes/covTrackRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

mongoose.Promise = global.Promise; //allows Asynchronous Operations

mongoose.connect( // MongoDB mongoose connection
//  "mongodb+srv://developer:OWBFpoXsPEQWjKgK@covtrack-cluster-1.tpmbm.mongodb.net/CovTrack_DB_Primary?retryWrites=true&w=majority",
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.urlencoded({ extended: true })); // Body parse for server
app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));

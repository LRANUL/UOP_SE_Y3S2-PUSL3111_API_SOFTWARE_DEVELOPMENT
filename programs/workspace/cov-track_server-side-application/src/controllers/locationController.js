import mongoose from "mongoose";
import { placesSchema } from "../models/covTrackModel";

const places = mongoose.model("location", placesSchema);

export const createPlaces = (req, res) => {
    const newplace = new places(req.body);
    newplace.save((err, Place) => {
      if (err) {
        res.send(err);
      }
      res.json(Place);
    });
  };


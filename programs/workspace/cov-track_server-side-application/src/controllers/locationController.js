import mongoose from "mongoose";
import { placesSchema } from "../models/covTrackModel";

const places = mongoose.model("location", placesSchema);

// creates a new location
export const createPlaces = (req, res) => {
    const newplace = new places(req.body);
    newplace.save((err, Place) => {
      if (err) {
        res.send(err);
      }
      res.json(Place);
    });
  };

  export const getPlaces = (req, res) => {
  places.find({sector: req.params.type})
  .then((data)=>{
    if(data)
  {
    res.status(200).json({
      message: "It works",
      data
    })
  }else
  {
    res.status(404).json({
      message: "The user does not exist"
    })
  } 
  })
}

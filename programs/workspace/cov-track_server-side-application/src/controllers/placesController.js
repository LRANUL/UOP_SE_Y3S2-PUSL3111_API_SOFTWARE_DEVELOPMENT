import { json } from "body-parser";
import mongoose from "mongoose";
import { placesSchema } from "../models/covTrackModel";

const places = mongoose.model("place", placesSchema);

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
  places.find({ sector: req.params.type })
    .then((data) => {
      if (data) {
        res.status(200).json({
          message: "It works",
          data
        })
      } else {
        res.status(404).json({
          message: "The user does not exist"
        })
      }
    })
}

export const getSinglePlaces = (req, res) => {
  places.findOne({ uid : req.params.code })
    .then((data) => {
      if (data) {
        res.status(200).json({
          message: "It works",
          data
        })
      } else {
        res.status(404).json({
          message: "The user does not exist"
        })
      }
    })
}



// get location details
export const getAllPlaces = (req, res) => {
  places.find((err, docs) => {
    if (!err) { res.send(docs); }
    else {
      console.log('Error in Retrieving Places : ' + JSON.stringify(err, undefined, 2));
    }
  });

}

// edit location
export const updateLocation = (req, res) => {
  // var location = { name: req.body.name, email: req.body.email, phone: req.body.phone, address: req.body.address };
  places.update(
    {email: req.params.email}, 
    req.body,
    { new: true, useFindAndModify: false }, 
    (err, places) => {
    if (err) {
      res.send(err);
    }
    res.json(places);
  }
  );
};

// remove location
export const deleteLocation = (req, res) => {
  places.deleteOne({ email: req.params.email }, (err, places) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${req.params.nic} was deleted.` });
  });
};




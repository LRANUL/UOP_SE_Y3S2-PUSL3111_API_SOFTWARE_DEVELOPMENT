import mongoose from "mongoose";
import { UserSchema } from "../models/covTrackModel";

const officers = mongoose.model("User", UserSchema);

  export const getOfficers = (req, res) => {
  officers.find({userType: req.params.type})
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

export const getOfficer = (req, res) => {
  officers.findOne({email: req.params.email})
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

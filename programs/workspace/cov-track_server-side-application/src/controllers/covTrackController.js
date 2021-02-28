import mongoose from "mongoose";
import { UserSchema } from "../models/covTrackModel";

const User = mongoose.model("User", UserSchema);
4;

export const addNewUser = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

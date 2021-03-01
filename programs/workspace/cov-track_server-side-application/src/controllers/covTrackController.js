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

export const getUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

export const getUsersFromNIC = (req, res) => {
  User.findOne({ nic: req.params.nic }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

export const updateUserFromNIC = (req, res) => {
  User.findOne(
    { nic: req.params.nic },
    req.body,
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    }
  );
};

export const removeUserFromNIC = (req, res) => {
  User.findOneAndDelete({ nic: req.params.nic }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${req.params.id} was deleted.` });
  });
};

// eslint-disable-next-line no-unused-vars
import { Timestamp } from "bson";
import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';

import { passwordReg } from '../services/validations';
import constants from '../services/config';

export const CitizenSchema = new Schema({
  firstName: {
    type: String,
    required: "First Name is required",
  },
  lastName: {
    type: String,
    required: "Last Name is required",
  },
  emailAddress: {
    type: String,
    required: "Email address is required",
  },
  heathStatus: {
    type: String,
  },
  address: {
    type: String,
  },
  affliation: {
    type: String,
  },
  checkedin: {
    type: Boolean,
    default: false,
  },
  historyID: {
    type: String,
  },
  lastCheckedLongitude: {
    type: String,
  },
  lastCheckedLatitude: {
    type: String,
  },
  nic: {
    type: String,
    required: "NIC is required",
  },
  mobileNumber: {
    type: Number,
    required: "Phone is required",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

export const HistorySchema = new Schema({
  nic: {
    type: String,
    required: "NIC is required",
  },
  uid: {
    type: String,
    required: "UID is required",
  },
  emailAddress: {
    type: String,
    required: "Email address is required",
  },
  checkinlongitude: {
    type: Number,
    required: "Longitude is required",
  },
  checkinlatitude: {
    type: Number,
    required: "Latitude is required",
  },
  checkoutlongitude: {
    type: Number,
    required: "Longitude is required",
  },
  checkoutlatitude: {
    type: Number,
    required: "Latitude is required",
  },
  checkintime: {
    type: String,
    default: new Date().toLocaleTimeString(),
  },
  checkouttime: {
    type: String,
    default: new Date().toLocaleTimeString(),
  },
  date: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
});

export const placesSchema = new Schema({
  QRcode: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
})

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required!'],
      trim: true,
      validate: {
        validator(email) {
          return validator.isEmail(email);
        },
        message: '{VALUE} is not a valid email!',
      },
    },
    firstName: {
      type: String,
      required: [true, 'FirstName is required!'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'LastName is required!'],
      trim: true,
    },
    userName: {
      type: String,
      required: [true, 'userName is required!'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      trim: true,
      minlength: [6, 'Password need to be longer!'],
      validate: {
        validator(password) {
          return passwordReg.test(password);
        },
        message: '{VALUE} is not a valid password!',
      },
    },
    DOB: {
      type: Date,
      required: [true, 'Date of birth is required!'],
    },
    phone: {
      type: String,
      required: [true, 'phone is required!'],
      unique: true,
    },
    address: {
      type: String,
      required: [true, 'address is required!'],
    },
    userType: {
      type: String,
      required: [true, 'user Type is required!'],
    },
    city: {
      type: String,
      required: [true, 'city is required!'],
    }
  },
  { timestamps: true },
);

UserSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
  }

  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id,
      },
      constants.JWT_SECRET,
    );
  },
  toAuthJSON() {
    return {
      _id: this._id,
      userName: this.userName,
      token: `JWT ${this.createToken()}`,
    };
  },
  // toJSON() {  (commented out because when trying to get all the user detail values only provides username and ID)
  //   return {
  //     _id: this._id,
  //     userName: this.userName,
  //   };
  // },
};

export default mongoose.model('User', UserSchema);

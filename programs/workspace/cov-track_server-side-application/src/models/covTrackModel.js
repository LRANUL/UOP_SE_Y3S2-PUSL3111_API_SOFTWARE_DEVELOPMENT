// eslint-disable-next-line no-unused-vars
import { Timestamp } from "bson";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CustomerSchema = new Schema({
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
  longitude: {
    type: Number,
    required: "Longitude is required",
  },
  latitude: {
    type: Number,
    required: "Latitude is required",
  },
  checkintime: {
    type: String,
    default: new Date().toLocaleTimeString(),
  },
  checkouttime: {
    type: String,
  },
  date: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
});

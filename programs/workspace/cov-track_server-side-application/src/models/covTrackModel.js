import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
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

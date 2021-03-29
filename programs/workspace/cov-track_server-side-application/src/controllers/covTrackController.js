import mongoose from "mongoose";
import { CustomerSchema, HistorySchema } from "../models/covTrackModel";

const Customer = mongoose.model("Customer", CustomerSchema);
const History = mongoose.model("History", HistorySchema);

/** Test */
export const test = (req, res) => {
  res.send('Running...');
};
/** Creating a New Customer */
export const addNewCustomer = (req, res) => {
  let newCustomer = new Customer(req.body);

  newCustomer.save((err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json(Customer);
  });
};
/** Search Customer List */
export const getCustomers = (req, res) => {
  Customer.find({}, (err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json(Customer);
  });
};
/** Find Customer by NIC */
export const getCustomerFromNIC = (req, res) => {
  Customer.findOne({ nic: req.params.nic }, (err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json(Customer);
  });
};
/** Update Customer by NIC */
export const updateCustomerFromNIC = (req, res) => {
  Customer.findOne(
    { nic: req.params.nic },
    req.body,
    { new: true, useFindAndModify: false },
    (err, Customer) => {
      if (err) {
        res.send(err);
      }
      res.json(Customer);
    }
  );
};
/** Remove Customer by NIC */
export const removeCustomerFromNIC = (req, res) => {
  Customer.findOneAndDelete({ nic: req.params.nic }, (err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${req.params.nic} was deleted.` });
  });
};
/** Find Customer CheckIn Status */
export const getCustomerCheckInStatus = (req, res) => {
  Customer.findOne({ nic: req.params.nic }, (err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json(Customer.checkedin);
  });
};
/** Adding a New Checkin to Customer */
export const setCustomerCheckIn = (req, res) => {
  let newCheckInRecord = new History(req.body);
  newCheckInRecord.save((err, History) => {
    if (err) {
      res.send(err);
    }
    res.json(History);
  });
};
/** Find Customer Login Status */
export const loginCustomer = (req, res) => {
  Customer.findOne({ nic: req.params.nic }, (err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json(Customer.loggedin);
  });
};

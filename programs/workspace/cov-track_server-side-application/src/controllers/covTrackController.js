/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
import mongoose from "mongoose";
import { CustomerSchema, HistorySchema } from "../models/covTrackModel";

const Customer = mongoose.model("Customer", CustomerSchema);
const History = mongoose.model("History", HistorySchema);

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
/** 
 * Find Customer by NIC 
 * @param {string} nic requests provides NIC to find customer
*/
export const getCustomerFromNIC = (req, res) => {
  Customer.findOne({ nic: req.params.nic }, (err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json(Customer);
  });
};
/** 
 * Update Customer by NIC 
 * @param {string} nic requests provides NIC to update customer data
 * @param {string} body consists data as a JSON object to update existing Profile
*/
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
/** 
 * Remove Customer by NIC 
 * @param {string} nic remove customer by provided NIC
*/
export const removeCustomerFromNIC = (req, res) => {
  // eslint-disable-next-line no-unused-vars
  Customer.findOneAndDelete({ nic: req.params.nic }, (err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${req.params.nic} was deleted.` });
  });
};
/** 
 * Find Customer CheckIn Status 
 * @param {string} nic to find customer checkin status by provided NIC
 * */
export const getCustomerCheckInStatus = (req, res) => {
  Customer.findOne({ nic: req.params.nic }, (err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json(Customer.checkedin);
  });
};
/** 
 * Adding a New Checkin to Customer 
 * @param {Object} body records customer activity to database
 * */
export const setCustomerCheckIn = (req, res) => {
  let newCheckInRecord = new History(req.body);
  newCheckInRecord.save((err, History) => {
    if (err) {
      res.send(err);
    }
    res.json(History);
  });
};
/** 
 * Find records of History per customer 
 * @param {string} nic to find customer histroy records by provided NIC
 * */
export const getCustomerHistory = (req, res) => {
  History.findOne({ nic: req.params.nic }, (err, History) => {
    if (err) {
      res.send(err);
    }
    res.json(History);
  });
};

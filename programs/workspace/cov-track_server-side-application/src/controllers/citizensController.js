/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
import mongoose from "mongoose";
import { CitizenSchema, HistorySchema, placesSchema } from "../models/covTrackModel";
import xmlparser from 'express-xml-bodyparser';
import xml from 'xml2js';
import express from 'express';
const app = express();
/** XML SUPPORT FOR SERVER */
const xmlOptions = {
  charkey: 'value',
  trim: true,
  explicitRoot: false,
  explicitArray: false,
  normalizeTags: false,
  mergeAttrs: true,
};

const builder = new xml.Builder({
  renderOpts: { 'pretty': false }
});

const requestHeaders = (req, res, next) => {
  req.app.isXml = false;

  if (request.headers['content-type'] === 'application/xml'
    || request.headers['accept'] === 'application/xml'
  ) {
    req.app.isXml = true;
  }

  next();
};

const Citizen = mongoose.model("Citizen", CitizenSchema);
const History = mongoose.model("History", HistorySchema);
const Business = mongoose.model("Business", placesSchema);
/** Creating a New Citizen - XML/JSON SUPPORTED */
export const addNewCitizen = (requestHeaders, (req, res) => {
  var body = (req.body['citizen'] || req.body)
  let newCitizen = new Citizen(body);

  newCitizen.save((err, Citizen) => {
    if (err) {
      res.sendStatus(err);
    }
    else if (req.app.isXml) {
      res.setHeader('Content-Type', 'application/xml');
      var builder = new xml.Builder();
      // Sending custom message here, other team members use xml body for parsed data from MongoDB responses
      var xmlBody = builder.buildObject(JSON.stringify(Citizen));
      return res.format({
        'application/xml': () => {
          res.status(200).send(builder.buildObject({ ['message']: `Citizen Registered` }));
        }
      })
    }
    else {
      response.format({
        'application/json': () => {
          response.status(200).json({ message: `Citizen Registered` });
        }
      })
    }
  })
});
/** Search Citizen List - XML/JSON SUPPORTED  */
export const getCitizens = (requestHeaders, (req, res) => {
  var nic = (req.body['nic'] || req.body.nic)
  console.log(req.app.isXml)
  Citizen.findOne({ nic: nic }, (err, Citizen) => {
    if (req.app.isXml) {
      res.setHeader('Content-Type', 'application/xml');
      var builder = new xml.Builder();
      var xmlBody = builder.buildObject(JSON.stringify(Citizen));
      return res.format({
        'application/xml': () => {
          res.status(200).send(builder.buildObject({ ['citizen']: xmlBody }));
        }
      })
    }
    else {
      response.format({
        'application/json': () => {
          response.status(200).json(Citizen);
        }
      })
    }
  })
});
/** 
 * Find Citizen by NIC 
 * @param {string} nic requests provides NIC to find Citizen
*/
export const getCitizenFromNIC = (req, res) => {
  Citizen.findOne({ nic: req.params.nic }, (err, Citizen) => {
    if (err) {
      res.send(err);
    }
    res.json(Citizen);
  });
};
/** 
 * Update Citizen by NIC 
 * @param {string} nic requests provides NIC to update Citizen data
 * @param {string} body consists data as a JSON object to update existing Profile
*/
export const updateCitizenFromNIC = (req, res) => {
  Citizen.findOne(
    { nic: req.params.nic },
    req.body,
    { new: true, useFindAndModify: false },
    (err, Citizen) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: `Citizen with NIC: ${req.params.nic} was updated.` });
    }
  );
};
/** 
 * Remove Citizen by NIC 
 * @param {string} nic remove Citizen by provided NIC
*/
export const removeCitizenFromNIC = (req, res) => {
  // eslint-disable-next-line no-unused-vars
  Citizen.findOneAndDelete({ nic: req.params.nic }, (err, Citizen) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `Citizen with NIC: ${req.params.nic} was deleted.` });
  });
};
/** 
 * Find Citizen CheckIn Status 
 * @param {string} nic to find Citizen checkin status by provided NIC
 * */
export const getCitizenCheckInStatus = (req, res) => {
  Citizen.findOne({ nic: req.params.nic }, (err, Citizen) => {
    if (err) {
      res.send(err);
    }
    res.json(Citizen.checkedin);
  });
};
/** 
 * Adding a New Checkin to Citizen 
 * @param {Object} body records Citizen activity to database
 * */
export const setCitizenCheckIn = (req, res) => {
  let newCheckInRecord = new History(req.body);
  newCheckInRecord.save((err, History) => {
    if (err) {
      res.send(err);
    }
    else {
      Citizen.findOneAndUpdate({ nic: req.body.nic }, { checkedin: true, historyID: History.id }, (err, Citizen) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: `Citizen with NIC: ${req.params.nic} was checked-in.` });
      });
    }
  });
};
/** 
 * Find records of History per Citizen 
 * @param {string} nic to find Citizen histroy records by provided NIC
 * */
export const getCitizenHistory = (req, res) => {
  History.find({ nic: req.params.nic }, (err, History) => {
    if (err) {
      res.send(err);
    }
    res.json(History);
  });
};

/** 
 * Identify Authenticity of a UID - Citizen App Request
 * @param {string} uid contains the unique identifier to track each business
 */
export const getUIDAuthenticity = (req, res) => {
  Business.findOne({ uid: req.params.uid }, (err, Business) => {
    if (err) {
      res.send(err);
    }
    res.json(true);
  });
};
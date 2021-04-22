import { Router } from 'express';
import validate from 'express-validation';

import { authLocal, authJwt } from '../services/auth';

import * as userController from '../controllers/userController';
import * as locationController from '../controllers/locationController';
import * as officersController from '../controllers/officersController';
import {
  addNewCitizen,
  getCitizenHistory,
  getCitizenCheckInStatus,
  getCitizenFromNIC,
  updateCitizenFromNIC,
  removeCitizenFromNIC,
  setCitizenCheckIn,
  getCitizens
} from '../controllers/citizensController';
import userValidation from '../services/validations';

const routes = new Router();

// JWT test route
routes.get('/test', authJwt, (req, res) => {
  res.send('Private route accessed!');
});
/** 
 * AUTHENTICATION 
 * */
// Auth
routes.post("/signup", validate(userValidation.signup), userController.signUp);
routes.post("/login", authLocal, userController.login);

/**
 * REACT MOBILE APP ROUTES 
 * */

/** Citizen Manage Routes  */
// For creating a Citizen 
routes.post("/citizens", addNewCitizen);
// For deleting Citizen from NIC
routes.delete("/citizens/:nic", removeCitizenFromNIC);
// For updating Citizen from NIC
routes.put("/citizens/:nic", updateCitizenFromNIC);
// For getting Citizen from NIC
routes.get("/citizens/:nic", getCitizenFromNIC);
// For getting all Citizens
routes.get("/citizens", authJwt, getCitizens);
// routes.get('/get-Citizens', authJwt, (req, res) => {
//   res.send('Private route accessed!');
// });

/** Citizen Checkin and History Routes */

// For getting checkin status
routes.get("/citizens/:nic/checkinstatus", getCitizenCheckInStatus);
// For checking in Citizen
routes.post("/citizens/checkin", setCitizenCheckIn);
// For getting in Citizen history
routes.get("/citizens/:nic/history", getCitizenHistory);

/** 
 * ANGULAR APP ROUTES 
 * 
 * */

// need to authenticate (by adding authJwt)  but left like this until authentication is finished
routes.post("/places", locationController.createPlaces, (req, res) => {
  res.send('Private route accessed!');
});

// need to authenticate (by adding authJwt) but left like this until authentication is finished
routes.get("/places/:type", locationController.getPlaces, (req, res) => {
  res.send('Private route accessed!');
});

routes.get("/one/place/:code", locationController.getSinglePlaces, (req, res) => {
  res.send('Private route accessed!');
});


// stifi....... // need to authenticate (by adding authJwt)  but left like this until authentication is finished
routes.get("/places", locationController.getAllPlaces, (req, res) => {
  res.send('Private route accessed!');
});

routes.put("/places/:email", locationController.updateLocation, (req, res) => {
  res.send('Private route accessed!');
});

routes.delete("/places/delete/:email", locationController.deleteLocation, (req, res) => {
  res.send('Private route accessed!');
});


// need to authenticate (by adding authJwt) but left like this until authentication is finished
routes.get("/officers/:type", officersController.getOfficers, (req, res) => {
  res.send('Private route accessed!');
});

// need to authenticate (by adding authJwt) but left like this until authentication is finished
routes.get("/officer/:email", officersController.getOfficer, (req, res) => {
  res.send('Private route accessed!');
});



export default routes;

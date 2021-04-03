import { Router } from 'express';
import validate from 'express-validation';

import { authLocal, authJwt } from '../services/auth';
// import * as userController from '../controllers/userController';
import {signUp, login} from '../controllers/userController';
import {
  getCustomerCheckInStatus,
  getCustomerFromNIC,
  updateCustomerFromNIC,
  removeCustomerFromNIC,
  setCustomerCheckIn,
  getCustomers
} from '../controllers/covTrackController';
import userValidation from '../services/validations';

const routes = new Router();

// JWT test route
routes.get('/test', authJwt, (req, res) => {
  res.send('Private route accessed!');
});

// Auth
routes.post("/signup", validate(userValidation.signup), signUp);
routes.post("/login", authLocal, login);

// /** Customer Manage Routes */

// For deleting customer from NIC
routes.delete("/customer-delete/:nic", removeCustomerFromNIC);
// For updating customer from NIC
routes.put("/customer-update/:nic", updateCustomerFromNIC);
// For getting customer from NIC
routes.get("/customer/:nic", getCustomerFromNIC);
// For getting all customers
routes.get("/get-customers", getCustomers);

/** Customer Checkin and History Routes */

// For getting checkin status
routes.get("/customer-checkin-status/:nic", getCustomerCheckInStatus);
// For checking in customer
routes.post("/customer-checkin", setCustomerCheckIn);

export default routes;

import validate from 'express-validation';

import { authLocal, authJwt } from '../services/auth';
import * as userController from '../controllers/userControllers';
import userValidation from '../services/userValidations';
import {
  getCustomers,
  getCustomerFromNIC,
  updateCustomerFromNIC,
  removeCustomerFromNIC,
  getCustomerCheckInStatus,
  setCustomerCheckIn,
} from "../controllers/covTrackController";

const routes = (app) => {

  // JWT test route
  app.route('/test').get(authJwt, (req, res) => {
    res.send('Private route accessed!');
  });

  // Auth
  app.route("/signup").post(validate(userValidation.signup), userController.signUp);
  app.route("/login").post(authLocal, userController.login);

  /** Customer Manage Routes */
  
  // For deleting customer from NIC
  app.route("/customer-delete/:nic").delete(removeCustomerFromNIC);
  // For updating customer from NIC
  app.route("/customer-update/:nic").put(updateCustomerFromNIC);
  // For getting customer from NIC
  app.route("/customer/:nic").get(getCustomerFromNIC);
  // For getting all customers
  app.route("/get-customers").get(getCustomers);

  /** Customer Checkin and History Routes */

  // For getting checkin status
  app.route("/customer-checkin-status/:nic").get(getCustomerCheckInStatus);
  // For checking in customer
  app.route("/customer-checkin").post(setCustomerCheckIn);
}

export default routes;

import {
  addNewCustomer,
  getCustomers,
  getCustomerFromNIC,
  updateCustomerFromNIC,
  removeCustomerFromNIC,
  getCustomerCheckInStatus,
  setCustomerCheckIn,
  loginCustomer,
  test,
} from "../controllers/covTrackController";

const routes = (app) => {

  /** Customer Manage Routes */
  app.route("/").get(test);
  // For deleting customer from NIC
  app.route("/customer-delete/:nic").delete(removeCustomerFromNIC);
  // For updating customer from NIC
  app.route("/customer-update/:nic").put(updateCustomerFromNIC);
  // For getting customer from NIC
  app.route("/customer/:nic").get(getCustomerFromNIC);
  // For getting all customers
  app.route("/get-customers").get(getCustomers);
  // For register a customer with CovTrack
  app.route("/customer-register").post(addNewCustomer);
  // For logging in a customer with CovTrack
  app.route("/customer-login").post(loginCustomer);

  /** Customer Checkin and History Routes */

  // For getting checkin status
  app.route("/customer-checkin-status/:nic").get(getCustomerCheckInStatus);
  // For checking in customer
  app.route("/customer-checkin").post(setCustomerCheckIn);

};

export default routes;

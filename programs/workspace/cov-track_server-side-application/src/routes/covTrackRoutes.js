import {
  addNewUser,
  getUsers,
  getUserFromNIC,
  updateUserFromNIC,
  removeUserFromNIC
} from "../controllers/covTrackController";

const routes = (app) => {
  // For deleting user from NIC
  app.route("/user-delete/:nic").delete(removeUserFromNIC);
  // For updating user from NIC
  app.route("/user-update/:nic").put(updateUserFromNIC);
  // For getting user from NIC
  app.route("/user/:nic").get(getUserFromNIC);
  // For getting all users
  app.route("/get-users").get(getUsers);
  // For register a user with CovTrack
  app.route("/user-register").post(addNewUser);
};

export default routes;

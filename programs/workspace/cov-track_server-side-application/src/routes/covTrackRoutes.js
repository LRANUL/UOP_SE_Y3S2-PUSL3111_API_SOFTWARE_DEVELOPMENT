import { addNewUser } from "../controllers/covTrackController";

const routes = (app) => {
  app.route("/register").post(addNewUser);
};

export default routes;

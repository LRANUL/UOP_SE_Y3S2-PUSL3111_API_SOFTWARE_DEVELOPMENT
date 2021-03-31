import { Router } from 'express';
import validate from 'express-validation';

import { authLocal } from '../services/auth';
import * as userController from '../controllers/userControllers';
import userValidation from '../services/validations';

const routes = new Router();

routes.post('/signup', validate(userValidation.signup), userController.signUp);
routes.post('/login', authLocal, userController.login);

export default routes;

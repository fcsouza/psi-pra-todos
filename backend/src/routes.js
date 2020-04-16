import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProfessionalController from './app/controllers/ProfessionalController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
// eslint-disable-next-line no-unused-vars
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/professionals', ProfessionalController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

export default routes;

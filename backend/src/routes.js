import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ProfessionalController from './app/controllers/ProfessionalController';
import OrgaoController from './app/controllers/OrgaoController';

import SessionController from './app/controllers/SessionController';

import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/professionals', ProfessionalController.store);
routes.post('/orgaos', OrgaoController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;

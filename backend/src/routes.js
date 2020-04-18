import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PacienteController from './app/controllers/PacienteController';
import ProfessionalController from './app/controllers/ProfessionalController';
import OrgaoController from './app/controllers/OrgaoController';

import SessionController from './app/controllers/SessionController';

import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/pacientes', PacienteController.store);
routes.post('/professionals', ProfessionalController.store);
routes.post('/orgaos', OrgaoController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/user', UserController.show);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;

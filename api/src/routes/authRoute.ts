import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import AuthValidator from '../middlewares/AuthValidator';

const authRoute: Router = Router();

authRoute.post('/', AuthValidator.validacaoDeEmail, AuthController.login);

export { authRoute };

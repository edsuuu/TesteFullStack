import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRoute: Router = Router();

authRoute.post('/', AuthController.login);

export { authRoute };

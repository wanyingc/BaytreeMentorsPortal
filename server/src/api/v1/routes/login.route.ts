import express from 'express';
import loginController from '../controllers/login.controller';

const loginRouter = express.Router();

loginRouter.post('/auth/login', loginController);

export default loginRouter;
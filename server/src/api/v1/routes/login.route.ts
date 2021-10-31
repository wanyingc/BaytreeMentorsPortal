import { Router, Request, Response, NextFunction } from 'express';
import loginController from '../controllers/login.controller';
import signupController from '../controllers/signup.controller';
import authmw from '../middlewares/auth.middleware';

const loginRouter = Router();

loginRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

loginRouter.post('/auth/login', loginController);

loginRouter.post('/auth/signup', authmw.verifyJWT, authmw.isAdmin, signupController);

export default loginRouter;
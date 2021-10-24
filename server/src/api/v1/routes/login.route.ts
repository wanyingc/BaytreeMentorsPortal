import { Router, Request, Response, NextFunction } from 'express';
import loginController from '../controllers/login.controller';

const loginRouter = Router();

loginRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

loginRouter.post('/auth/login', loginController);

export default loginRouter;
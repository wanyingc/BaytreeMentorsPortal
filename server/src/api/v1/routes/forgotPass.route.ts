import { Router, Request, Response, NextFunction } from 'express';
import forgotController from '../controllers/forgotPass.controller'


const loginRouter = Router();

loginRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});

loginRouter.post('/forgot-password', forgotController);

export default loginRouter;
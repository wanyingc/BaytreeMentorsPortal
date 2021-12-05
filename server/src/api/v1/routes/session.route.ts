import { Router, Request, Response, NextFunction } from 'express';
import sessionController from '../controllers/session.controller';
import authMW from '../middlewares/auth.middleware';

const sessionRouter = Router();

sessionRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});

sessionRouter.get(
    `/auth/session-notes/`, 
    [
        authMW.verifyJWT,
        authMW.isUser
    ],  
    sessionController);

export default sessionRouter;
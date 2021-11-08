import { Router, Request, Response, NextFunction } from 'express';
import profileController from '../controllers/profile.controller';
import authMW from '../middlewares/auth.middleware';

const profileRouter = Router();

profileRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});

profileRouter.post(
    `/auth/profile/`, 
    [
        authMW.verifyJWT,
        authMW.isUser
    ],  
    profileController);

export default profileRouter;
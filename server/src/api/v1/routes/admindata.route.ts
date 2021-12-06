import { Router, Request, Response, NextFunction } from 'express';
import adminDataController from '../controllers/admindata.controller';
import authMW from '../middlewares/auth.middleware';

const adminDataRouter = Router();

adminDataRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});

adminDataRouter.get(
    `/auth/admindata`, 
    [
        authMW.verifyJWT,
        authMW.isUser,
        authMW.isAdmin
    ],  
    adminDataController);

export default adminDataRouter;
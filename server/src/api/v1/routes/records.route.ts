import { Router, Request, Response, NextFunction } from 'express';
import recordsController from '../controllers/records.controller';
import authMW from '../middlewares/auth.middleware';

const recordsRouter = Router();

recordsRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});

recordsRouter.post(
    `/auth/records/`, 
    [
        authMW.verifyJWT,
        authMW.isUser
    ],  
    recordsController);

export default recordsRouter;
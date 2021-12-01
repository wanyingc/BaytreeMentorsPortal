import { Router, Request, Response, NextFunction } from 'express';
import goalController from '../controllers/goal.controller';
import authMW from '../middlewares/auth.middleware';

const goalRouter = Router();

goalRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});
goalRouter.post(
    '/auth/mentor/goal', 
    [
        authMW.verifyJWT,
        authMW.isUser,
        authMW.isMentor
    ],  
    goalController);

    export default goalRouter;

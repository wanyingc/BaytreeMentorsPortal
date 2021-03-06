import { Router, Request, Response, NextFunction } from 'express';
import mentorHomeController from '../controllers/mentorhome.controller';
import authMW from '../middlewares/auth.middleware';

const mentorHomeRouter = Router();

mentorHomeRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});
mentorHomeRouter.post(
    '/auth/mentor/mentorhome', 
    [
        authMW.verifyJWT,
        authMW.isUser,
        authMW.isMentor
    ],  
    mentorHomeController);

    export default mentorHomeRouter;
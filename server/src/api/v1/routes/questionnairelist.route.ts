import { Router, Request, Response, NextFunction } from 'express';
import questionnairelistcontroller from '../controllers/questionnairelist.controller';
import authMW from '../middlewares/auth.middleware';

const questionnairelistRouter = Router();

questionnairelistRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});

questionnairelistRouter.get(
    `/auth/questionnairelist/`, 
    [
        authMW.verifyJWT,
        authMW.isUser,
        authMW.isAdmin
    ],  
    questionnairelistcontroller);

export default questionnairelistRouter;
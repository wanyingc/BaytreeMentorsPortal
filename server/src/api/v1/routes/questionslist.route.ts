import { Router, Request, Response, NextFunction } from 'express';
import questionlistcontroller from '../controllers/questionlist.controller';
import authMW from '../middlewares/auth.middleware';

const questionsListRouter = Router();

questionsListRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});

questionsListRouter.get(
    `/auth/questionlist/`, 
    [
       authMW.verifyJWT,
       authMW.isUser,
       authMW.isAdmin
    ],  
    questionlistcontroller);

export default questionsListRouter;
import { Router, Request, Response, NextFunction } from 'express';
import mentorListController from '../controllers/mentorlist.controller';
import authMW from '../middlewares/auth.middleware';

const mentorListRouter = Router();

mentorListRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});
mentorListRouter.get(
    '/auth/admin/mentorlist', 
    [
        authMW.verifyJWT,
        authMW.isUser,
        authMW.isAdmin
    ],  
    mentorListController);

    export default mentorListRouter;
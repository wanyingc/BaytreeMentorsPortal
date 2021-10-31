import { Router, Request, Response, NextFunction } from 'express';
import mentorListController from '../controllers/mentorlist.controller';
import authMW from '../middlewares/auth.middleware';

const mentorListRouter = Router();

mentorListRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
mentorListRouter.get(
    '/auth/admin/mentorlist', 
    [
        authMW.verifyJWT,
        authMW.isAdmin
    ],  
    mentorListController);

    export default mentorListRouter;
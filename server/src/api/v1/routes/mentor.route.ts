import { Router, Request, Response, NextFunction } from 'express';
import mentorController from '/Users/dhairyakalra/prj/server/src/api/v1/controllers/mentor.controller';
import authMW from '../middlewares/auth.middleware';

const mentorRouter = Router();

mentorRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
mentorRouter.get(
    '/read', 
    [
        authMW.verifyJWT,
        authMW.isAdmin
    ],  
    mentorController);

    export default mentorRouter;
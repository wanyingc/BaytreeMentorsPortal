import { Router, Request, Response, NextFunction } from 'express';
import testController from '../controllers/test.controller';
import authMW from '../middlewares/auth.middleware';

const recordRouter = Router();
let personID = 5;

recordRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

recordRouter.get(
    `/auth/record/sessions/`, 
    [
        authMW.verifyJWT,
        authMW.isUser
    ],  
    testController.testAuthMentorController);

export default recordRouter;
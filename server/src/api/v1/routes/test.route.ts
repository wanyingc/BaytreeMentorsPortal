import { Router, Request, Response, NextFunction } from 'express';
import testController from '../controllers/test.controller';
import authMW from '../middlewares/auth.middleware';

const testRouter = Router();

testRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

testRouter.get(
    '/test/admin', 
    [
        authMW.verifyJWT,
        authMW.isAdmin
    ],  
    testController.testAuthAdminController);

testRouter.get(
    '/test/mentor', 
    [
        authMW.verifyJWT,
        authMW.isMentor
    ], 
    testController.testAuthMentorController);

testRouter.get(
    '/test/mod', 
    [
        authMW.verifyJWT,
        authMW.isModerator
    ], 
    testController.testAuthModeratorController);

export default testRouter;
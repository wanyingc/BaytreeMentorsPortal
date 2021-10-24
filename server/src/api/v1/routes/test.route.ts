import { Router, Request, Response, NextFunction } from 'express';
import testController from '../controllers/test.controller';
import verifyJWT from '../middlewares/auth.middleware';

const testRouter = Router();

testRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

testRouter.get('/test/admin', [], testController.testAuthAdminController);

testRouter.get(
    '/test/mentor', 
    [
        verifyJWT
    ], 
    testController.testAuthMentorController);

testRouter.get('/test/mod', [], testController.testAuthModeratorController);

export default testRouter;
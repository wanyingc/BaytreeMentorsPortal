import { Router, Request, Response, NextFunction } from 'express';
import { createSessionController, getSessionGroupIDsController } from '../controllers/createsession.controller';
import testController from '../controllers/test.controller';
import authmw from '../middlewares/auth.middleware';
import { getSessionGroupIDsViewsMW, postSessionToViewsMW, updateAttendanceAndNoteMW } from '../middlewares/createsession.middleware';

const createSessionRouter = Router();

createSessionRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});

createSessionRouter.post(
    '/auth/create-session',
    [ 
        authmw.verifyJWT, 
        authmw.isUser,
        authmw.isMentor,
        postSessionToViewsMW,
        updateAttendanceAndNoteMW
    ],
    createSessionController
    );

createSessionRouter.get(
    '/auth/session-groupids/:personid',
    [ 
        authmw.verifyJWT, 
        authmw.isUser,
        authmw.isMentor,
        getSessionGroupIDsViewsMW
    ],
    getSessionGroupIDsController
    );

export default createSessionRouter;
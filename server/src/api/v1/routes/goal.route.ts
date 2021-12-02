import { Router, Request, Response, NextFunction } from 'express';
import {goalListActiveController, goalListController, goalPostController, goalUpdateController} from '../controllers/goal.controller';
import authMW from '../middlewares/auth.middleware';
import { validateGoalRequestMW } from '../middlewares/goal.middleware';

const goalRouter = Router();

goalRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});

goalRouter.post( // create new goal
    '/auth/mentor/goal', 
    [
        authMW.verifyJWT,
        authMW.isUser,
        authMW.isMentor,
        validateGoalRequestMW
    ],  
    goalPostController
);

goalRouter.get( // get all the goals (incl. id)
    '/auth/mentor/goalList', 
    [
        authMW.verifyJWT,
        authMW.isUser,
        authMW.isMentor
    ],  
    goalListController
);

goalRouter.get( // get all the active goals
    '/auth/mentor/goalListActive', 
    [
        authMW.verifyJWT,
        authMW.isUser,
        authMW.isMentor
    ],  
    goalListActiveController
);

goalRouter.put( // update goal by id
    '/auth/mentor/goalUpdate/:id', 
    [
        authMW.verifyJWT,
        authMW.isUser,
        authMW.isMentor
    ],  
    goalUpdateController
);

export default goalRouter;

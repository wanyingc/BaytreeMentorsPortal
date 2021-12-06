import { Router, Request, Response, NextFunction } from 'express';
import createiscussionController from '../controllers/createDiscussion.controller';


const createDiscussionRouter = Router();

createDiscussionRouter.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});

createDiscussionRouter.post('/creatediscussion', createiscussionController);

export default createDiscussionRouter;
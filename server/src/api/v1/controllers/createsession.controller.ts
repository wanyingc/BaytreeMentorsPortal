import { Request, Response, NextFunction } from 'express';
import UserInfo from '../models/userinfo.model';

export const createSessionController = async (req:Request, res:Response, next:NextFunction) => {
    
    return res.status(200).send({response: "Session Creation Successful!"});
}

export const getSessionGroupIDsController = async (req:Request, res:Response, next:NextFunction) => {    
    return res.status(200).send({
        sgids: res.locals.SessionGroupIDs
    });
}
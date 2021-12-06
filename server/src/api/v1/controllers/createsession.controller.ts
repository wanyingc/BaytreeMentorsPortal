import { Request, Response, NextFunction } from 'express';
import UserInfo from '../models/userinfo.model';

export const createSessionController = async (req:Request, res:Response, next:NextFunction) => {
    
    res.status(200).json({response: res.locals.response});
}

export const getSessionGroupIDsController = async (req:Request, res:Response, next:NextFunction) => {    
    return res.status(200).send({
        sgids: res.locals.SessionGroupIDs
    });
}
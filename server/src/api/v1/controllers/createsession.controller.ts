import { Request, Response, NextFunction } from 'express';
import UserInfo from '../models/userinfo.model';

export const createSessionController = async (req:Request, res:Response, next:NextFunction) => {
    
    res.status(200).json({response: res.locals.response});
}
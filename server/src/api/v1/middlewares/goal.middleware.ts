import { Request, Response, NextFunction } from 'express';
import {AUTH_CONFIG} from '../../../config/config';
import Goal from '../models/goal.model';
import User from '../models/user.model';

export const validateGoalRequestMW = async (req:Request, res:Response, next:NextFunction) => {
    let user = await User.findOne({personID: req.body.personID});
    if(user){
        res.locals.mentorEmail = user.email;
    } else {
        return res.status(404).send({error: "Cannont add goals because User not found."});
    }
}
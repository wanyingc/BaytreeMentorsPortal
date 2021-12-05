import { Request, Response, NextFunction } from 'express';
import {AUTH_CONFIG} from '../../../config/config';
import Goal from '../models/goal.model';
import User from '../models/user.model';

export const validateGoalRequestMW = async (req:Request, res:Response, next:NextFunction) => {
    let user = await User.findOne({personID: req.body.mentorID});
    if(user){
        res.locals.mentorID = user.personID;
    } else {
        return res.status(404).send({error: "Cannont add goals because User not found."});
    }
    if(req.body.mentorID && req.body.menteeName && req.body.date && req.body.reviewDate && req.body.notes && req.body.status){
        next();
    } else {
        return res.status(401).send({
            error: "All fields are not provided. Please try again."
        });
    }
}
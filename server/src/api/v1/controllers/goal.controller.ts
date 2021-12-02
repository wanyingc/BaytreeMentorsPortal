import { Request, Response, NextFunction } from 'express';
import Goal from "../models/goal.model";
import UserInfo from '../models/userinfo.model';
const Joi = require('joi');

const logTitle = "Goal Controller";

export const goalPostController = async (req:Request, res:Response, next:NextFunction) => {
    let newGoal = new Goal({
        mentorID: req.body.mentorID,
        menteeName: req.body.menteeName,
        date: req.body.date,
        reviewDate: req.body.reviewDate,
        notes: req.body.notes,
        status: req.body.status,
    });

    
    newGoal = await newGoal.save();

    let goals = await Goal.find({mentorID: req.body.mentorID});
    
    return res.status(200).json({
        goals: goals
    });
};
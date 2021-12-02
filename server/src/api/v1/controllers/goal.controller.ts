import { Request, Response, NextFunction } from 'express';
import Goal from "../models/goal.model";
import UserInfo from '../models/userinfo.model';
const Joi = require('joi');

const logTitle = "Goal Controller";

export const goalPostController = async (req:Request, res:Response, next:NextFunction) => {
    // let convertedDate = new Date(req.body.date);
    // let convertedReviewDate = new Date(req.body.reviewDate);
    
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

export const goalListController = async (req:Request, res:Response, next:NextFunction) => {
    if(req.body.mentorID){
        let goals = await Goal.find({mentorID: req.body.mentorID});
        console.log(goals);
        return res.status(200).send({goals: goals});
    } else {
        return res.status(201).send({
            error: "No goals found for the "
        });
    }
}

export const goalListActiveController = async (req:Request, res:Response, next:NextFunction) => {
    try{
        let goalsActive = Goal.find({mentorID: req.body.mentorID, status: "in_progress"});
        console.log(goalsActive);
        res.status(200).send(goalsActive);
    } 
    catch{
        return res.status(201).send({
            error: "No goals found for "
        });
    }
}

export const goalUpdateController = async (req:Request, res:Response, next:NextFunction) => {
    let id = req.params.id;
}
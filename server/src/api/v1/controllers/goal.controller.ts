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
        return res.status(200).send({goals: goals});
    } else {
        return res.status(201).send({
            goals: []
        });
    }
}

export const goalListActiveController = async (req:Request, res:Response, next:NextFunction) => {
    try{
        let goalsActive = Goal.find({mentorID: req.body.mentorID, status: "in_progress"});
        res.status(200).send({goals: goalsActive});
    } 
    catch{
        return res.status(201).send({
            goals: []
        });
    }
}

export const goalUpdateController = async (req:Request, res:Response, next:NextFunction) => {
    if(req.body.id && req.body.mentorID && req.body.status){
        await Goal.findOneAndUpdate({"_id": req.body.id}, req.body.status, {upsert: true}, function(err) {
                if (err) return res.status(500).send({error: err});
                let goals = Goal.find({mentorID: req.body.mentorID});
                return res.status(200).send({
                    goals: goals
                });
            });
    } else {
        return res.status(401).send({
            error: "All the parameters are not available, please try again"
        });
    }
    
}
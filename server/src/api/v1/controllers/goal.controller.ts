import { Request, Response, NextFunction } from 'express';
import Goal from "../models/goal.model";
import UserInfo from '../models/userinfo.model';
import getRoles from '../services/roles.service';
const Joi = require('joi');

const logTitle = "Goal Controller";

export const goalPostController = async (req:Request, res:Response, next:NextFunction) => {
    // let convertedDate = new Date(req.body.date);
    // let convertedReviewDate = new Date(req.body.reviewDate);
    let dateDB = new Date(req.body.date).toLocaleDateString();
    let reviewDateDB = new Date(req.body.reviewDate).toLocaleDateString();

    let newGoal = new Goal({
        mentorID: req.body.mentorID,
        menteeName: req.body.menteeName,
        date: dateDB,
        reviewDate: reviewDateDB,
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
    if (req.body.mentorID){
        await Goal.find({mentorID: req.body.mentorID, status: "in_progress"})
            .exec()
            .then(goals => {
                return res.status(200).send({goals: goals});
            })
            .catch(err => {
                return res.status(200).send({goals: []});            
            });
    } 
    else {
        return res.status(201).send({
            goals: []
        });
    }
}

export const goalUpdateController = async (req:Request, res:Response, next:NextFunction) => {
    if(req.body.id && req.body.mentorID && req.body.status[0]){
        let statusArray = getRoles(req.body.status[0]);
        console.log(statusArray);
        const doc = { $set: {status: statusArray} };
        let goals = await Goal.find({mentorID: req.body.mentorID});
        Goal
        .findOneAndUpdate({ _id: req.body.id }, doc)
        .exec(function(err, product){
            if(err) return res.status(500).json({err: err.message});
            
            res.json({
                message: 'Successfully updated',
                goals: goals
            })
        });

    } else {
        return res.status(401).send({
            error: "All the parameters are not available, please try again"
        });
    }
    
}
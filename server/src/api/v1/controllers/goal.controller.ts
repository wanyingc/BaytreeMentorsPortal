import { Request, Response, NextFunction } from 'express';
import Goal from "../models/goal.model";
import UserInfo from '../models/userinfo.model';
const Joi = require('joi');

const logTitle = "Goal Controller";
const bcrypt = require ('bcrypt');
const saltRounds = 10;

const goalController = async (req:Request, res:Response, next:NextFunction) => {
    // // Validate the request
    // const schema = Joi.object({
    //     goalID: Joi.number().required(),
    //     menteeName: Joi.string().required(),
    //     mentorEmail: Joi.string().required().email(),
    //     date: Joi.date().required(),
    //     reviewDate: Joi.date().required(),
    //     notes: Joi.string().required(),
    //     status: Joi.array().items(Joi.string().valid("achieved", "in_progress", "recalibrated"))
    // });

    // const { error } = schema.validate(req.body);  
    // if (error) {
    //     return res.status(400).json({
    //         error: error.details[0].message
    //     });
    // }

   

    let newGoal = new Goal({
        mentorEmail: req.body.mentorEmail,
        goalID: req.body.goalID,
        menteeName: req.body.menteeName,
        date: req.body.date,
        reviewDate: req.body.reviewDate,
        notes: req.body.notes,
        status: req.body.status,
    });

    
    newGoal = await newGoal.save();
    let goals = await Goal.find({email: req.body.email});

    
    return res.status(200).json({
        email: newGoal.mentorEmail,
        goalID: newGoal.goalID,
        menteeName: newGoal.menteeName,
        date: newGoal.date,
        reviewDate: newGoal.reviewDate,
        notes: newGoal.notes,
        status: newGoal.status,
        goals: goals
    });

};

export default goalController;
import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import authConfig from '../../../config/auth.config';
import User from "../models/user.model";
const Joi = require('joi');

const logTitle = "Login Controller";

const signupController = async (req:Request, res:Response, next:NextFunction) => {
    // Validate the request
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        roles: Joi.array().items(Joi.string().valid("mentor", "youth_mentor", "into_school_mentor", "women_mentor", "admin", "moderator"))
    });

    const { error } = schema.validate(req.body);  
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    // Check if the mentor is already registered
    let user = await User.findOne({email: req.body.email});
    if (user) {
        return res.status(400).json({
            message: "That user already exisits!"
        }); 
    } 

    // Insert the new mentor to the database
    let newUser = new User({
        email: req.body.email,
        password: req.body.password,
        roles: req.body.roles
    });

    newUser = await newUser.save();

    // Return inserted mentor to the client
    return res.status(200).json({
        email: newUser.email,
        roles: newUser.roles,
    });

};

export default signupController;
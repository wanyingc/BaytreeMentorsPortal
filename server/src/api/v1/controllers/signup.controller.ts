import { Request, Response, NextFunction } from 'express';
import User from "../models/user.model";
import UserInfo from '../models/userinfo.model';
const Joi = require('joi');

const logTitle = "Login Controller";
const bcrypt = require ('bcrypt');
const saltRounds = 10;

const signupController = async (req:Request, res:Response, next:NextFunction) => {
    // Validate the request
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        roles: Joi.array().items(Joi.string().valid("user", "mentor", "youth_mentor", "into_school_mentor", "women_mentor", "admin", "moderator"))
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

    bcrypt.hash(req.body.password, saltRounds, async (err: any, hash: string) => {

        // Insert the new mentor to the database
        let newUser = new User({
            email: req.body.email,
            personID: res.locals.personID,
            password: hash,
            roles: res.locals.roles,
        });

        // Insert the new mentor to the database
        let newUserInfo = new UserInfo({
            personID: res.locals.personID,
            firstName: res.locals.firstName,
            lastName: res.locals.lastName,
            email: req.body.email,
            phone: res.locals.phone,
            startDate: res.locals.startDate,

        });

        newUser = await newUser.save();
        newUserInfo = await newUserInfo.save();

        // Return inserted mentor to the client
        return res.status(200).json({
            email: newUser.email,
            personID: newUser.personID,
            roles: newUser.roles,
        });
    });
};

export default signupController;
import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import {AUTH_CONFIG, TOKEN_EXPIRE_DURATION} from '../../../config/config';
import User from "../models/user.model";

const logTitle = "Login Controller";
const bcrypt = require ('bcrypt');

const forgotController = async (req:Request, res:Response, next:NextFunction) => {
    await User.find({
            email: req.body.email
        })
        .exec()
        .then((users) => {      
            if(users.length !== 1){
                return res.status(404).send({
                    message: "User does not exist!",
                });
            };
            let user = users[0];  
            let token = jsonwebtoken.sign({ email: user.email}, AUTH_CONFIG.secret, {expiresIn: TOKEN_EXPIRE_DURATION});
            let returnInfo = {
                email: user.email,
                roles: user.roles,
                personID: user.personID,
                accessToken: token
            };
            res.status(200).send(returnInfo);
        })
        .catch(err => {
            res.status(404).json({
                message: "User not found!"
            })
        });
};

export default forgotController;
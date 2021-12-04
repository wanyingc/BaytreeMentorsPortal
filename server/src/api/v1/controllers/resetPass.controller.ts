import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import {AUTH_CONFIG, TOKEN_EXPIRE_DURATION} from '../../../config/config';
import User from "../models/user.model";
import crypto from 'crypto';
const bcrypt=require('bcrypt');
const saltRounds = 10;

const ResetController = async (req:Request, res:Response, next:NextFunction) => {
    await User.find({
        forget_password_token: req.body.forget_password_token
        })
        .exec()
        .then((users) => {      
            if(users.length < 1){
                return res.status(404).send({
                   message: "Token expired! Please try again",
                });
            }
            else{
                bcrypt.hash(req.body.password, saltRounds, async (err: any, hash: string) => {
               users[0].password=req.body.password
               users[0].save();
                });
            }
            res.status(200).send();
        })
        .catch(err => {
            
            res.status(404).json({
                message: "User not found!"
            })
        });
};

export default ResetController;
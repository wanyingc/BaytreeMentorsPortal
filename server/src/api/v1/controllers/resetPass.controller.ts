import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import {AUTH_CONFIG, TOKEN_EXPIRE_DURATION} from '../../../config/config';
import User from "../models/user.model";
import crypto from 'crypto';

const ResetController = async (req:Request, res:Response, next:NextFunction) => {
    await User.find({
            token: req.body.token
        })
        .exec()
        .then((users) => {      
            if(users.length !== 1){
                console.log(users[0].token);
                return res.status(404).send({
                   message: "Token expired! Please try again",
                });
            }
            else{
                
               users[0].password=req.body.password

               users[0].save();
    
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
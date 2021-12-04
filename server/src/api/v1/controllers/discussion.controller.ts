import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import {AUTH_CONFIG, TOKEN_EXPIRE_DURATION} from '../../../config/config';
import User from "../models/user.model";
import crypto from 'crypto';

const DiscussionController = async (req:Request, res:Response, next:NextFunction) => {
    await User.find({
            email: req.body.email
        })
        .exec()
        .then((users) => {      
    
            res.status(200).send();
        })
        .catch(err => {
            res.status(404).json({
                message: "User and Text not found!"
            })
        });
};

export default DiscussionController;
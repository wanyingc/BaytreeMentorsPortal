import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import {AUTH_CONFIG, TOKEN_EXPIRE_DURATION} from '../../../config/config';
import userInfo from "../models/userinfo.model";
import crypto from 'crypto';
import Discussion from '../models/discussion.model';


const DiscussionController = async (req:Request, res:Response, next:NextFunction) => {
    await userInfo.find({
            email: req.body.email
        })
        .exec()
        .then((users) => {
            if(users.length!==1){

                res.status(404).send({
                    message: "User does not exist!",
                });
            }
            else{

                let firstName_dis=users[0].firstName;
                let lastName_dis=users[0].lastName;
                let newDiscussion = new Discussion({
                    email: req.body.email,
                    header:req.body.header,
                    message:req.body.message,
                    firstName:firstName_dis,
                    lastName:lastName_dis,
                    postdate:req.body.postDate,

                });
                newDiscussion.save();
                res.send({
                });

            }    
        })
        .catch(err => {
            res.status(404).json({
                message: "User and Text not found!"
            })
        });
};
export default DiscussionController;
import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import {AUTH_CONFIG, TOKEN_EXPIRE_DURATION, EMAIL_TRANS, PASS_TRANS} from '../../../config/config';
import User from "../models/user.model";
import crypto from 'crypto';

const nodemailer= require('nodemailer');
const logTitle = "Login Controller";
const bcrypt = require ('bcrypt');

const forgotController = async (req:Request, res:Response, next:NextFunction) => {
    await User.find({
            email: req.body.email
        })
        .exec()
        .then(async (users) => {      
            if(users.length !== 1){
                return res.status(404).send({
                    message: "User does not exist!",
                });
            }
            else{
                let forget_password_token = jsonwebtoken.sign({ email: req.body.email}, AUTH_CONFIG.secret);
                    users[0].forget_password_token=forget_password_token;
                    users[0].save();
                const transporter =nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:EMAIL_TRANS,
                        pass:PASS_TRANS,
                    },
                });
                const mailOptions={
                    from:EMAIL_TRANS,
                    to:req.body.email,
                    subject:'Link to reset Pass',
                    text:
                    'Hey '+User.name+', \n'+ 
                    'Click on the link and enter the code below to reset the password!n '+'\n \n'+ forget_password_token + '\n \n'+
               'http://localhost:3000/reset-password/' +'\n'+
               'Thank You \n \n Cheers, \n Team Mars'
                };
                transporter.sendMail(mailOptions,(err:Error,response:Response)=>{
                    if(err){
                        console.log('there was an error',err);
                    }
                    else{
                        console.log('here is the res:',response);


                        res.status(200).json('recovery e-mail sent'); 
                    }
                })
            }
            res.status(200).send();
        })
        .catch(err => {
            res.status(404).json({
                message: "User not found!"
            })
        });
};
export default forgotController;
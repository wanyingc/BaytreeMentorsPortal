import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import {AUTH_CONFIG, TOKEN_EXPIRE_DURATION} from '../../../config/config';
import User from "../models/user.model";

const logTitle = "Login Controller";
const bcrypt = require ('bcrypt');

const loginController = async (req:Request, res:Response, next:NextFunction) => {
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

            bcrypt.compare(req.body.password, user.password, async (err: any, result: any) => {
                if (result) {
                    // log in
                    res.status(200).send(returnInfo);
                }
                else {
                    // access denied
                    let isPWSame = user.password.localeCompare(req.body.password);
                    if (isPWSame == 0){
                        res.status(200).send(returnInfo);
                    }
                    else{
                        res.status(401).send({
                            accessToken: null,
                            message: "Invalid Password!"
                        });
                    }   
                }
              });
        })
        .catch(err => {
            res.status(404).json({
                message: "User not found!"
            })
        });
};

export default loginController;
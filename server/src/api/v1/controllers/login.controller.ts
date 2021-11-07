import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import authConfig from '../../../config/auth.config';
import User from "../models/user.model";

const logTitle = "Login Controller";

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
            let isPWSame = user.password.localeCompare(req.body.password);
            if(isPWSame !== 0) {
                return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
            } else {
                let token = jsonwebtoken.sign({ email: user.email}, authConfig.secret, {expiresIn: 3600});
                res.status(200).send({
                    email: user.email,
                    roles: user.roles,
                    personID: user.personID,
                    accessToken: token
                });
            };
        })
        .catch(err => {
            res.status(404).json({
                message: "User not found!"
            })
        });
};

export default loginController;
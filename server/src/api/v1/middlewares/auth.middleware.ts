import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import {AUTH_CONFIG} from '../../../config/config';
import User from '../models/user.model';

const logTitle = "Login MW";

const verifyJWT = (req:Request, res:Response, next:NextFunction) => {
    let accessToken: string = req.headers["x-access-token"] as string;

    if(!accessToken || accessToken.length == 0){
        return res.status(404).send({
            message: "No token found!"
        });
    }

    jsonwebtoken.verify(accessToken, AUTH_CONFIG.secret, (error, decodedToken) => {
        if(error){
            return res.status(401).send({
                message: "Invalid token!"
            });
        } else {
            res.locals.jwt = decodedToken;
            next();
        }
    });
};

const isUser = (req:Request, res:Response, next:NextFunction) => {
    User.find({email: res.locals.jwt.email})
        .exec()
        .then((users) => {
            if(users.length !== 1) {
                res.status(404).send({
                    message: "User does not exist!"
                });
                return;
            }
            let user = users[0];
            if(user.roles.indexOf('user') === -1){
                return res.status(403).send({
                    message: "Forbidden! No user access!"
                });
            } else {
                next();
            }
        })
        .catch(error => {
            res.status(404).send({
                message: "User does not exist!",
                error
            });
            return;
        });
}

const isMentor = (req:Request, res:Response, next:NextFunction) => {
    User.find({email: res.locals.jwt.email})
        .exec()
        .then((users) => {
            if(users.length !== 1) {
                res.status(404).send({
                    message: "User does not exist!"
                });
                return;
            }
            let user = users[0];
            if(user.roles.indexOf('mentor') === -1){
                return res.status(403).send({
                    message: "Forbidden! No mentor access!"
                });
            } else {
                next();
            }
        })
        .catch(error => {
            res.status(404).send({
                message: "User does not exist!",
                error
            });
            return;
        });
}

const isAdmin = (req:Request, res:Response, next:NextFunction) => {
    User.find({email: res.locals.jwt.email})
        .exec()
        .then((users) => {
            if(users.length !== 1) {
                res.status(404).send({
                    message: "User does not exist!"
                });
                return;
            }
            let user = users[0];
            if(user.roles.indexOf('admin') === -1){
                return res.status(403).send({
                    message: "Forbidden! No Admin access!"
                });
            } else {
                next();
            }
        })
        .catch(error => {
            res.status(404).send({
                message: "User does not exist!",
                error
            });
            return;
        });
}

const isModerator = (req:Request, res:Response, next:NextFunction) => {
    User.find({email: res.locals.jwt.email})
        .exec()
        .then((users) => {
            if(users.length !== 1) {
                res.status(404).send({
                    message: "User does not exist!"
                });
                return;
            }
            let user = users[0];
            if(user.roles.indexOf('moderator') === -1){
                return res.status(403).send({
                    message: "Forbidden! No Moderator access!"
                });
            } else {
                next();
            }
        })
        .catch(error => {
            res.status(404).send({
                message: "User does not exist!",
                error
            });
            return;
        });
}

export default { verifyJWT, isUser, isMentor, isAdmin, isModerator };
import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import authConfig from '../../../config/auth.config';

const logTitle = "Login MW";

const verifyJWT = (req:Request, res:Response, next:NextFunction) => {
    console.log(logTitle + " token verification!");
    let accessToken: string = req.headers["x-access-token"] as string;

    if(!accessToken || accessToken.length == 0){
        return res.status(404).send({
            message: "No token found!"
        });
    }

    console.log(accessToken);

    jsonwebtoken.verify(accessToken, authConfig.secret, (error, decodedToken) => {
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

export default verifyJWT;
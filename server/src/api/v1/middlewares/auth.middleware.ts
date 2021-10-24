import { Request, Response, NextFunction } from 'express';

const logTitle = "Login MW";

const verifyJWT = (req:Request, res:Response, next:NextFunction) => {
    console.log(logTitle + " verified token.");

    return res.status(200).json({
        message: "Authorized!"
    });
};

export default verifyJWT;
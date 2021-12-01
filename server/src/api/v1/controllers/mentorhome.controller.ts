import { Request, Response, NextFunction } from 'express';
import UserInfo from '../models/userinfo.model';

    const mentorHomeController = async (req:Request, res:Response, next:NextFunction) => {

        // session
        res.status(200).send({
            result: "henlo"
        });

    }
    export default mentorHomeController;
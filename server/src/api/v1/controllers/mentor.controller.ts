
import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import authConfig from '../../../config/auth.config';
const user= require('/Users/dhairyakalra/prj/server/src/api/v1/models/user_info');

    const mentorController = async (req:Request, res:Response, next:NextFunction) => {
       
        user.find({},(err:Error,result:any)=>{
            if(err){
                res.send(err);
            }
            res.send(result);
            })
    
    };
    
    export default mentorController;
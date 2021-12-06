import { Request, Response, NextFunction } from 'express';
import Message from '../interfaces/discussion.interface';
import Discussion from '../models/discussion.model';

    const createDiscussionController = async (req:Request, res:Response, next:NextFunction) => {
       
       await Discussion.find({})
        .exec()
        .then((discussions) => {
            let discArr = Object.values(discussions);
            
            res.status(200).send({result:discArr})
        })
        .catch(err => {
            return res.status(404).send({
                error: err
            });
        });
    }
    export default createDiscussionController;
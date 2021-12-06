import { Request, Response, NextFunction } from 'express';
import Discussion from '../models/discussion.model';

    const createDiscussionController = async (req:Request, res:Response, next:NextFunction) => {
       
        Discussion.find({})
        .exec()
        .then((discussions) => {
            res.status(200).send({
                result: discussions
            });
        })
        .catch(err => {
            return res.status(404).send({
                error: err
            });
        });
    }
    export default createDiscussionController;
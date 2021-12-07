import { Request, Response, NextFunction } from 'express';
import UserInfo from '../models/userinfo.model';

    const mentorListController = async (req:Request, res:Response, next:NextFunction) => {
       
        UserInfo.find({ email: { $ne: "admin@bt.com"}})
            .exec()
            .then((users) => {
                users.pop()
                res.status(200).send({
                    result: users
                });
            })
            .catch(err => {
                return res.status(404).send({
                    error: err
                });
            });
    }
    export default mentorListController;

    //find({
//   $or: [
//     { age: { $gte: 29 } },
//     { rank: 'Commander' }
//   ]
// })
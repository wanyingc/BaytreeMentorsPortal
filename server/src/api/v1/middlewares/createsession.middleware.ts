import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';

const logTitle = "Create Session MW";

export const postSessionToViewsMW = async (req:Request, res:Response, next:NextFunction) => {

    if(req.body.sgid && req.body.venueID && req.body.mentee && req.body.personID && req.body.attended && req.body.date && req.body.note){
        try {
            // const response = await axios.post(`https://app.viewsapp.net/api/restful/work/sessiongroups/${req.body.sgid}/sessions`, 
            // {
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     auth: {
            //         username: VIEWS_USERNAME,
            //         password: VIEWS_PASSWORD
            //     }
            // });
    
            res.locals.date = req.body.date;
            res.locals.sgid = req.body.sgid;
            res.locals.venueID = req.body.venueID;
            res.locals.mentee = req.body.mentee;
            res.locals.start = req.body.start;
            res.locals.end = req.body.end;
            res.locals.personID = req.body.personID;
            res.locals.note = req.body.note;
            res.locals.attended = req.body.attended;
            res.locals.response = "Session Creation Successful!";
            next();
        } catch (err) {
            return res.status(400).json({
                error: "Could not add the session to Views, please try again."
            });
        }

    } else {
        return res.status(400).json({
            error: "All required fields are not provided. Please try again"
        })
    }

};
import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';
import { getNumUpcomingSessions, processDatesFromResponse } from '../services/mentorhome.service';
import { getResponseArray } from '../services/responseToArray.service';

    const mentorHomeController = async (req:Request, res:Response, next:NextFunction) => {

        // session completed
        // get sessions of the duration
        // 37 - sessions attended + missed
        try{
            const resp = await axios.get(`https://app.viewsapp.net/api/restful/contacts/staff/${req.body.personID}/sessions`, 
            {
                headers: {
                    "Content-Type": "application/json"
                },
                auth: {
                    username: VIEWS_USERNAME,
                    password: VIEWS_PASSWORD
                }
            });
            let keySessionsRoot = Object.keys(resp.data);
            let resSessionsArray = getResponseArray(resp.data[keySessionsRoot[0]]);
            let numSessions = processDatesFromResponse(resSessionsArray);


            // start of academic year - september
            res.status(200).send({
                AttendedSessions: numSessions.numAttendedSessions,
                MissedSessions: numSessions.numMissedSessions,
                UpcomingSessions: getNumUpcomingSessions()
            });
        }
        catch {
            res.status(401).send({
                error: "o no"
            });
        }
        

        

    }
    export default mentorHomeController;
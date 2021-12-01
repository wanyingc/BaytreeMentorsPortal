import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';
import { processDatesFromResponse } from '../services/mentorhome.service';
import { getResponseArray } from '../services/records.service';

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
            let datesArray = processDatesFromResponse(resSessionsArray);


            // start of academic year - september
            res.status(200).send({
                result: datesArray
            });
        }
        catch {
            res.status(401).send({
                error: "o no"
            });
        }
        

        

    }
    export default mentorHomeController;
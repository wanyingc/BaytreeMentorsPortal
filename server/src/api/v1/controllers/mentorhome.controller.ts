import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';
import { getNumUpcomingSessions, processDatesFromResponse, processQuestionnairesFromResponse } from '../services/mentorhome.service';
import { getResponseArray } from '../services/responseToArray.service';

    const mentorHomeController = async (req:Request, res:Response, next:NextFunction) => {

        // session completed
        // get sessions of the duration
        // 37 - sessions attended + missed
        try{
            await axios.all([
                axios.get(`https://app.viewsapp.net/api/restful/contacts/staff/${req.body.personID}/sessions`, 
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    auth: {
                        username: VIEWS_USERNAME,
                        password: VIEWS_PASSWORD
                    }
                }),
                axios.get(`https://app.viewsapp.net/api/restful/contacts/volunteers/${req.body.personID}/questionnaires`, 
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    auth: {
                        username: VIEWS_USERNAME,
                        password: VIEWS_PASSWORD
                    }
            })]).then(axios.spread((responseSessions, responseQuestionnaires) => {
                let keySessionsRoot = Object.keys(responseSessions.data);
                let resSessionsArray = getResponseArray(responseSessions.data[keySessionsRoot[0]]);
                let numSessions = processDatesFromResponse(resSessionsArray);
                let resQuestionnaireArray = getResponseArray(responseQuestionnaires.data);
                let numQuestionnaires = processQuestionnairesFromResponse(resQuestionnaireArray);

                // start of academic year - september
                res.status(200).send({
                    AttendedSessions: numSessions.numAttendedSessions,
                    MissedSessions: numSessions.numMissedSessions,
                    UpcomingSessions: getNumUpcomingSessions(),
                    CompletedQuestionnaires: numQuestionnaires.numQuestionnairesCompleted,
                    IncompleteQuestionnaires: numQuestionnaires.numQuestionnaresIncomplete
                });
            }))
            .catch(err => {
                return res.status(500).send({
                    error: err
                });
            });            
        }
        catch {
            res.status(401).send({
                error: "o no"
            });
        }
        

        

    }
    export default mentorHomeController;
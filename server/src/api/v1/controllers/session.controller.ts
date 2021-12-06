import { Request, Response } from 'express';
import axios from 'axios';
import { getResponseArray } from '../services/responseToArray.service';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';

const logTitle = "Session Controller";

const sessionController = async (req:Request, res:Response) => {
    await axios.all([
        axios.get(`https://app.viewsapp.net/api/restful/work/sessiongroups/sessions/${req.body.sessionID}/notes`, 
            {
                headers: {
                    "Content-Type": "application/json"
                },
                auth: {
                    username: VIEWS_USERNAME,
                    password: VIEWS_PASSWORD
                }
            }
        )
    ]).then(axios.spread((responseSessionNotes) => {

        let resSessionNotesArray = getResponseArray(responseSessionNotes.data);
        // let resSessionArray = getResponseArray(responseSessions.data['sessions']);
        // let resQuestionnaireArray = getResponseArray(responseQuestionnaires.data);
        
        res.status(200).send({
            message: "session Notes (list?)",
            "sessionNotes": resSessionNotesArray,
        });
    })).catch(err => {
        // console.log(logTitle + ": Error:\n" + err);
        return res.status(500).send({
            error: err
        });
    });
};
export default  sessionController ;
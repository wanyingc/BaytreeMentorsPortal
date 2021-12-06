import { Request, Response } from 'express';
import axios from 'axios';
import { getResponseArray } from '../services/responseToArray.service';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';

const logTitle = "Records Controller";

const recordsController = async (req:Request, res:Response) => {
    await axios.all([
        axios.get(`https://app.viewsapp.net/api/restful/contacts/volunteers/${req.body.personID}/sessions`, 
            {
                headers: {
                    "Content-Type": "application/json"
                },
                auth: {
                    username: VIEWS_USERNAME,
                    password: VIEWS_PASSWORD
                }
            }
        ),
        axios.get(`https://app.viewsapp.net/api/restful/contacts/volunteers/${req.body.personID}/questionnaires`, 
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
    ]).then(axios.spread((responseSessions, responseQuestionnaires) => {

        let resSessionArray = getResponseArray(responseSessions.data['sessions']);
        let resQuestionnaireArray = getResponseArray(responseQuestionnaires.data);
        
        res.status(200).send({
            message: "session and questionnaire lists",
            "sessions": resSessionArray,
            "questionnaires": resQuestionnaireArray,
        });
    })).catch(err => {
        return res.status(500).send({
            error: err
        });
    });
};

export default  recordsController ;
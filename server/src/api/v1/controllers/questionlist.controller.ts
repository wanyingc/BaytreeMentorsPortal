import { Request, Response } from 'express';
import axios from 'axios';
import { getResponseArray } from '../services/responseToArray.service';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';

const questionlist = async (req:Request, res:Response) => {
    await axios.all([
        axios.get(`https://app.viewsapp.net/api/restful/evidence/questionnaires/${req.body.questionnaireID}/questions`, 
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
       
    ]).then(axios.spread((responseQuestionsList) => {

        // Retrieves first layer of Key from the JSON: key: evidence...
        //keyVolCount[0] = "questionnaires count=x"
        //let keyVolCount = Object.keys(responseQuestionsList.data);

        let resQuestionsArray = getResponseArray(responseQuestionsList.data);

        res.status(200).send({
            "questionsList": resQuestionsArray,
        });
    })).catch(err => {
        console.log(err)
        return res.status(500).send({
            error: err
        });
    });
};

export default  questionlist ;
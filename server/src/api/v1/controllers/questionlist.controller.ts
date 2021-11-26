import { Request, Response } from 'express';
import axios from 'axios';
import { getResponseArray } from '../services/responseToArray.service';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';

const questionlist = async (req:Request, res:Response) => {
    await axios.all([
        axios.get(`https://app.viewsapp.net/api/restful/evidence/questionnaires/27/questions`, 
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
        let keyVolCount = Object.keys(responseQuestionsList.data);

        console.log("keyVolCount = ",keyVolCount)
        console.log("keyVolCOunt[0] = ", [keyVolCount[0]])
        let resQuestionsArray = getResponseArray(responseQuestionsList.data);
        console.log("THE ARRAY", resQuestionsArray)

        res.status(200).send({
            "questionnaireList": resQuestionsArray,
        });
    })).catch(err => {
        console.log(err)
        console.log("ERRROEREOROEROEOROEOREROEREE")
        return res.status(500).send({
            error: err
        });
    });
};

export default  questionlist ;
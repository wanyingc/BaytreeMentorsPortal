import { Request, Response } from 'express';
import axios from 'axios';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';

const token = Buffer.from(`${VIEWS_USERNAME}:${VIEWS_PASSWORD}`, 'utf8').toString('base64')

const postquestionnaire = async (req:Request, res:Response) => {
    await axios.all([
        axios.post(`https://app.viewsapp.net/api/restful/contacts/volunteers/${req.body.mentorID}/questionnaires/${req.body.questionnaireID}`, null,
            {
                headers: {
                    'Authorization': `Basic ${token}`
                },
                // auth: {
                //     username: VIEWS_USERNAME,
                //     password: VIEWS_PASSWORD
                // }
            }
        ),
    ])
    .then(axios.spread((response) => {
        console.log(response)

    })).catch(err => {
        console.log(err)
        return res.status(401).send({
            error: err
        });
    });
};

export default  postquestionnaire ;
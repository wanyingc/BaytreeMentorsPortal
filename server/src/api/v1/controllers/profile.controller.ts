import { Request, Response } from 'express';
import axios from 'axios';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';

const profileController = async (req:Request, res:Response) => {
    await axios.all([
        axios.get(`https://app.viewsapp.net/api/restful/contacts/volunteers/${req.body.personID}`, 
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
       
    ]).then(axios.spread((responseProfile) => {

        res.status(200).send({
            name: responseProfile.data.Forename || '',
            surname: responseProfile.data.Surname || '',
            phone: responseProfile.data.Mobile || '',
            email: responseProfile.data.Email || '',
            mentorType: responseProfile.data.Type || '',
            occupation: responseProfile.data.Occupation || '',

        });
    })).catch(err => {
        return res.status(500).send({
            error: err
        });
    });
};

export default  profileController ;
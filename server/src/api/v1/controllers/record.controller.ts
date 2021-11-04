import { Request, Response } from 'express';
import axios from 'axios';

const logTitle = "Record Controller";

const recordSessionsController = async (req:Request, res:Response) => {
    await axios.all([
        axios.get(`https://app.viewsapp.net/api/restful/contacts/volunteers/${req.body.personID}/sessions`, 
            {
                headers: {
                    "Content-Type": "application/json"
                },
                auth: {
                    username: 'group.mars',
                    password: 'RDhQ2kJ#v&8u'
                }
            }
        )
    ]).then(axios.spread((responseSessions) => {
        console.log(logTitle + ": Response:\n" + responseSessions.data["sessions"]);
        res.status(200).send({
            message: "session and questionnaire lists",
            "sessions": responseSessions.data["sessions"],
            "questionnaires": ""
        });
    })).catch(err => {
        console.log(logTitle + ": Error:\n" + err);
        return res.status(500).send({
            error: err
        });
    });
};

export default { recordSessionsController };
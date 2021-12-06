import { Request, Response } from 'express';
import axios from 'axios';
import { getResponseArray } from '../services/responseToArray.service';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';

const logTitle = "Session Controller";

type sessionNoteType = {
    Created: string;
    CreatedBy: string;
    Date: string;
    Note: string;
    NoteID: number;
    Private: string;
    Snippet: string;
    Type: string;
    TypeID: string;
    Updated: string;
    UpdatedBy: string;
  };

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
        
        let processedResponseNotes: sessionNoteType[] = [];
        resSessionNotesArray.forEach((noteObj, index) => {
            let keys = Object.keys(noteObj);
            keys.forEach(key => {
                processedResponseNotes.push(noteObj[key]);
            })
        })
        
        res.status(200).send({
            message: "session Notes (list?)",
            "sessionNotes": processedResponseNotes
        });
    })).catch(err => {
        // console.log(logTitle + ": Error:\n" + err);
        return res.status(500).send({
            error: err
        });
    });
};
export default  sessionController ;
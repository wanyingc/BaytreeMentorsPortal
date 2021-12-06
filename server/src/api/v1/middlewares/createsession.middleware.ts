import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { number, string } from 'joi';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';
import { getResponseArray } from '../services/responseToArray.service';

const logTitle = "Create Session MW";
const token = Buffer.from(`${VIEWS_USERNAME}:${VIEWS_PASSWORD}`, 'utf8').toString('base64');
type sessionGroupIDType = {
    id: number;
    name: string;
    venueID: string;
}

const milliToHourMinute = (milli: number) => {
    let minutes = Math.floor((milli / (1000 * 60)) % 60);
    let hours = Math.floor((milli / (1000 * 60 * 60)) % 24);
    let minutesString = minutes < 10 ? '0'+ minutes : minutes;
    let hoursString = hours < 10 ? '0'+ hours : hours;

    return hoursString + ":" + minutesString;
}

export const getSessionGroupIDsViewsMW = async (req:Request, res:Response, next:NextFunction) => {
    if(req.params.personid){
        await axios.all([
            axios.get(`https://app.viewsapp.net/api/restful/work/sessiongroups/search`,
                {
                    headers: {
                        'Authorization': `Basic ${token}`,
                        'Content-Type': 'text/xml',
                    },
                }
            ),
        ])
        .then(axios.spread((response) => {
            let keyMainResponse = Object.keys(response.data);
            let arraySessionGroups = getResponseArray(response.data[keyMainResponse[0]])
            let arraySgids: sessionGroupIDType[] = [];
            arraySessionGroups.forEach(sessionGroup => {
                let staffArray: string[] = sessionGroup['OtherStaff'].split("|");
                staffArray.push(sessionGroup['LeadStaff']);
                if(staffArray.includes(req.params.personid)){
                    res.locals.VenueID = sessionGroup['VenueID'];
                    arraySgids.push({
                        id: parseInt(sessionGroup['SessionGroupID']),
                        name: sessionGroup['SessionGroupID'],
                        venueID: sessionGroup['VenueID']
                    })
                }
            });
            const sessionGroupIDs = [
                {
                  id: 17,
                  name: '17',
                  venueID: '2'
                },
            ];
            if(arraySgids.length === 0){
                arraySgids = sessionGroupIDs
            }
            res.locals.SessionGroupIDs = arraySgids;
            next();
        })).catch(err => {
            return res.status(401).send({
                error: "Could not add the session to Views, please try again."
            });
        });
    }
}

export const postSessionToViewsMW = async (req:Request, res:Response, next:NextFunction) => {
    if(req.body.sgid && req.body.venueID && req.body.mentee && req.body.personID && req.body.date && req.body.note){
        let duration = 0;
        let durationString = "0";
        if(req.body.start && req.body.end){ // calculate time diff if start and end time given
            let timeStart = new Date();
            let timeEnd = new Date();
            let valueStart = req.body.start.split(':');
            let valueEnd = req.body.end.split(':');

            timeStart.setHours(valueStart[0], valueStart[1], 0, 0)
            timeEnd.setHours(valueEnd[0], valueEnd[1], 0, 0)

            duration = timeEnd.getMilliseconds() - timeStart.getMilliseconds();
            durationString = milliToHourMinute(duration);
        }
        
        const requestBody = `<?xml version="1.0" encoding="utf-8"?>
                            <request>
                                <StartDate>${req.body.date}</StartDate>
                                <StartTime>${req.body.start}</StartTime>
                                <Duration>${durationString}</Duration>
                                <LeadStaff>${req.body.personID}</LeadStaff>
                                <VenueID>${req.body.venueID}</VenueID>
                                <Status>${req.body.attended ? '1' : '0'}</Status>
                            </request>`;

        await axios.all([ // First request goes to create the session
            axios.post(`https://app.viewsapp.net/api/restful/work/sessiongroups/${req.body.sgid}/sessions`, requestBody,
                {
                    headers: {
                        'Authorization': `Basic ${token}`,
                        'Content-Type': 'text/xml',
                    },
                }
            ),            
        ])
        .then(axios.spread( (response) => {
            req.body.SessionID = response.data.SessionID;
            next();
        })).catch(err => {
            return res.status(401).send({
                error: "Could not add the session to Views, please try again."
            });
        });
    } else {
        return res.status(400).json({
            error: "All required fields are not provided. Please try again"
        })
    }

};

export const updateAttendanceAndNoteMW = async (req:Request, res:Response, next:NextFunction) => {
    // console.log(req.body.attended);
    const attendanceString = req.body.attended ? 'Attended' : 'Did not attend';
    console.log(attendanceString);
    let attendanceReqBody = `<staff>
                                <ContactID>${req.body.personID}</ContactID>
                                <Attended>${attendanceString}</Attended>
                            </staff>`;
    let noteReqBody = `<note>
                            <Note>
                                ${ attendanceString + " - "+ req.body.note}
                            </Note>
                        </note>`;

    await axios.all([ // 2nd and 3rd request goes to update session attendance and session notes to specific session // attendance does not work
        axios.put(`https://app.viewsapp.net/api/restful/work/sessiongroups/${req.body.sgid}/sessions/${req.body.SessionID}/staff`, attendanceReqBody, 
            {
                headers: {
                    'Authorization': `Basic ${token}`,
                    'Content-Type': 'text/xml',
                },
            }
        ),
        axios.post(`https://app.viewsapp.net/api/restful/work/sessiongroups/sessions/${req.body.SessionID}/notes`, noteReqBody,
            {
                headers: {
                    'Authorization': `Basic ${token}`,
                    'Content-Type': 'text/xml',
                },
            }
        ),
    ])
    .then(axios.spread(async (responseAttendance, responseNote) => {
        console.log(responseAttendance.data, responseNote.data);
        next();
        // res.locals.attendance = "Attendance updated";
        // res.locals.note = "note created";
    })).catch(err => {
        return res.status(401).send({
            error: "Could not add the session to Views because Attendance or notes updates did not work, please try again."
        });
    });
}
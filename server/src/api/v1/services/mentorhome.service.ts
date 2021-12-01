/*
Sept - 30 -(-1)
Oct - 31 (-1)
Nov - 30 ()
Dec - 31 (-2)-
Jan - 31 (-1)
Feb - 28/29 (-1)
Mar - 31 ()
Apr - 30 (-2)
May - 31 ()
Jun - 30 -(-1)
Jul - 31 (-2)-
Aug - 31 -(-4)-

total: 52 - (15) = 37
*/

import internal from "stream";

type sessionType = {
    "SessionID": string;
    "SessionGroupID": string;
    "Title": string;
    "Type": string;
    "StartDate": string;
    "Duration": string;
    'ParticipantID': number;
    "Status": string;
    "Link": string;
}

type returnType = {
    dateArrayAttended: Date[];
    dateArrayMissed: Date[];
}
// current date
let currentDate = new Date();
// academic year for the date
// {start, end}
//

export const processDatesFromResponse = (res: sessionType[]): returnType => {
    let datesArrayAttended: Date[] = [];
    let datesArrayCancelled: Date[] = [];
    res.forEach(session => {
        if(session.Status === "Attended"){
            let date = new Date(session.StartDate);
            datesArrayAttended.push(date);
        } else if (session.Status === "Registered"){
            let date = new Date(session.StartDate);
            datesArrayCancelled.push(date);
        }
        
    });
    return { 
        dateArrayAttended: datesArrayAttended, 
        dateArrayMissed: datesArrayCancelled 
    };
}
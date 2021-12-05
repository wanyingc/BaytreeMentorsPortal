import { questionnaireType, returnQuestionnaireResponseType, returnSessionDateResponseType, sessionType } from "../interfaces/mentorhome.interface";

let currentDate = new Date();
let acaYear = (currentDate.getMonth()+1 >= 1 || currentDate.getMonth()+1 <= 8) ? currentDate.getFullYear() : currentDate.getFullYear() - 1;
let beginAcaYearDate = new Date(`${acaYear}-9-1`);
/*
For Calculating holidays::
Sept - 30 -(-1)
Oct - 31 (-1)
Nov - 30 ()
Dec - 31 (-2)-
Jan - 31 -(-1)
Feb - 28/29 (-1)
Mar - 31 (-2/0)
Apr - 30 (-2/0)
May - 31 (-1/0)
Jun - 30 (-1/0)
Jul - 31 (-2)-
Aug - 31 -(-4)-
    total: 52 - (15) = 37
*/
let monthsInAcaYear = [[9, 1], [10,1], [11,0], [12, 2], [1, 1], [2, 1], [3, 0], [4, 2], [5, 0], [6, 1], [7, 2], [8, 4]];

function dateDiffInDays(startDate: Date, endDate: Date) {
    let timeInMilisec: number = startDate.getTime() - endDate.getTime();
    let daysBetweenDates: number = Math.floor(timeInMilisec / (1000 * 60 * 60 * 24)) + 1;
        
    return daysBetweenDates;
}

export const getNumUpcomingSessions = () => {
    let endDate = new Date(`${acaYear+1}-8-31`);
    let diffWeeks = Math.round(Math.abs(dateDiffInDays(endDate, currentDate) / 7)); // Number of weeks left in academic year

    let currentMonthPassed: boolean = false;
    monthsInAcaYear.forEach(monthObj => {
        if(!currentMonthPassed && monthObj[0] === currentDate.getMonth() + 1){
            currentMonthPassed = true;
        }
        if (currentMonthPassed){ // if current monthObj is past/in current month, start subtracting
            if(monthObj[0] !== currentDate.getMonth() + 1) { // not in the current month
                diffWeeks -= monthObj[1];
            }
            else{ // in current month
                let numDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
                let numWeeksInMonth = Math.round(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() / 7); // 4 or 5
                let numWeeksLeftInMonth = Math.round(Math.abs(numDaysInMonth - currentDate.getDate()) / 7); // eg. on 15th, we have 2 weeks left
                let ratioWeeksLeftVSTotal = numWeeksLeftInMonth / numWeeksInMonth; // weeks left : total weeks
                let weeksToSubtract = Math.round(monthObj[1] * ratioWeeksLeftVSTotal);
                diffWeeks -= weeksToSubtract;
            }
        }
    });
    return diffWeeks;
}

export const getNumPrevSessions = (dates: Date[]) => { // Number of sessions between Start of academic year and current date
    let numSessions = 0;
    dates.forEach(date => {
        if(beginAcaYearDate < date){ // date <= currentDate
            numSessions++;
        }
    });
    return numSessions;
}
export const getNumMonthsBeforeCurrentDate = () => {
    let numMonths = currentDate.getTime() - beginAcaYearDate.getTime();
    numMonths = Math.floor(Math.abs(numMonths / (1000 * 60 * 60 * 24 * 30)));
    return numMonths;
}

export const processDatesFromResponse = (res: sessionType[]): returnSessionDateResponseType => {
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
        numAttendedSessions: getNumPrevSessions(datesArrayAttended), 
        numMissedSessions: getNumPrevSessions(datesArrayCancelled)
    };
}

export const processQuestionnairesFromResponse = (res: questionnaireType[]): returnQuestionnaireResponseType => {
    let datesArrayAttended: Date[] = [];
    res.forEach(session => {
        let date = new Date(session.Date);
        datesArrayAttended.push(date);      
    });
    let numQuestionnairesCompleted = getNumPrevSessions(datesArrayAttended);
    let numMonthsInAcaYear = getNumMonthsBeforeCurrentDate();
    let numQuestionnairesIncomplete = numQuestionnairesCompleted < numMonthsInAcaYear ? (numMonthsInAcaYear - numQuestionnairesCompleted) : 0;

    return { 
        numQuestionnairesCompleted: numQuestionnairesCompleted, 
        numQuestionnaresIncomplete: numQuestionnairesIncomplete
    };
}
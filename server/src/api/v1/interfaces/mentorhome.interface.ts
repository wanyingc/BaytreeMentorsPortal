import { string } from "joi"

export type sessionType = {
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

export type questionnaireType = {
    "Date": string;
}

export type returnSessionDateResponseType = {
    numAttendedSessions: number;
    numMissedSessions: number;
    sessionsCompletedPerMonth: number[];
}

export type returnQuestionnaireResponseType = {
    numQuestionnairesCompleted: number;
    numQuestionnaresIncomplete: number;
}
import axios from "axios";
import { VIEWS_USERNAME, VIEWS_PASSWORD } from "../../../config/config";
import User from "../models/user.model";
import { processDatesFromResponse, processQuestionnairesFromResponse } from "../services/mentorhome.service";
import { getResponseArray } from "../services/responseToArray.service";
import moment from 'moment';
import AdminDashboard from "../models/adminDashboard.model";

async function getAdminData() {
    let users = await User.find({});

    let finalData = {
        upcomingSessions: [3, 4, 5],    // Not possible to get from Views as of now. Mocking it with some initial values instead.
        nonDeliveredSessions: [0, 0, 0],
        pendingQuestionnaires: [0, 0, 0],
        sessionsCompletedYouthMentors: [2,3,5,2,1,5,2,1,0,0,0,0], // No real data exists in our db before September, 2021. Mocking those as well.
        sessionsCompletedIntoSchoolMentors: [2,1,3,1,1,0,4,1,0,0,0,0], // No real data exists in our db before September, 2021. Mocking those as well.
        sessionsCompletedWomenMentors: [2,3,5,3,1,2,1,1,0,0,0,0], // No real data exists in our db before September, 2021. Mocking those as well.
    }

    for (let user of users) {
        if (user.personID == undefined) {
            continue;
        }

        let mentorDataFromViews = await getDataFromViews(user.personID);

        if (mentorDataFromViews == undefined) {
            continue;
        }

        if (user.roles.indexOf("women_mentor") >= 0) {
            finalData.nonDeliveredSessions[2] += mentorDataFromViews?.numMissedSessions || 0;
            finalData.pendingQuestionnaires[2] += mentorDataFromViews?.pendingQuestionnaires || 0;
            for (let i = 0; i < finalData.sessionsCompletedWomenMentors.length; ++i) {
                finalData.sessionsCompletedWomenMentors[i] += mentorDataFromViews.sessionsCompletedPerMonth[i];
            }
        }

        if (user.roles.indexOf("into_school_mentor") >= 0) {
            finalData.nonDeliveredSessions[1] += mentorDataFromViews?.numMissedSessions || 0;
            finalData.pendingQuestionnaires[1] += mentorDataFromViews?.pendingQuestionnaires || 0;
            for (let i = 0; i < finalData.sessionsCompletedIntoSchoolMentors.length; ++i) {
                finalData.sessionsCompletedIntoSchoolMentors[i] += mentorDataFromViews.sessionsCompletedPerMonth[i];
            }
        }

        if (user.roles.indexOf("youth_mentor") >= 0) {
            finalData.nonDeliveredSessions[0] += mentorDataFromViews?.numMissedSessions || 0;
            finalData.pendingQuestionnaires[0] += mentorDataFromViews?.pendingQuestionnaires || 0;
            for (let i = 0; i < finalData.sessionsCompletedYouthMentors.length; ++i) {
                finalData.sessionsCompletedYouthMentors[i] += mentorDataFromViews.sessionsCompletedPerMonth[i];
            }
        }
    }

    await AdminDashboard.findOneAndUpdate({}, finalData, { upsert: true });
}

async function getDataFromViews(personID: number) {
    try{
        return await axios.all([
            axios.get(`https://app.viewsapp.net/api/restful/contacts/staff/${personID}/sessions`, 
            {
                headers: {
                    "Content-Type": "application/json"
                },
                auth: {
                    username: VIEWS_USERNAME,
                    password: VIEWS_PASSWORD
                }
            }),
            axios.get(`https://app.viewsapp.net/api/restful/contacts/volunteers/${personID}/questionnaires`, 
            {
                headers: {
                    "Content-Type": "application/json"
                },
                auth: {
                    username: VIEWS_USERNAME,
                    password: VIEWS_PASSWORD
                }
        })]).then(axios.spread((responseSessions, responseQuestionnaires) => {
            let keySessionsRoot = Object.keys(responseSessions.data);
            let resSessionsArray = getResponseArray(responseSessions.data[keySessionsRoot[0]]);

            let numSessions = processDatesFromResponse(resSessionsArray);
            let sessionsCompletedPerMonth = getSessionsCompletedPerMonth(resSessionsArray);
            let resQuestionnaireArray = processQuestionnairesFromResponse(getResponseArray(responseQuestionnaires.data));

            return {
                ...numSessions,
                sessionsCompletedPerMonth: sessionsCompletedPerMonth,
                pendingQuestionnaires: resQuestionnaireArray.numQuestionnaresIncomplete,
            };
        }));
    }
    catch(e) {
        console.log(e);
        return undefined;
    }
}

function getSessionsCompletedPerMonth(sessions :any): number[] {
    let res = [0,0,0,0,0,0,0,0,0,0,0,0];
    let now = moment().add('months', 1).date(0);

    for (let session of sessions) {
        const startDate = moment(session.StartDate);
        
        if (session.Status != 'Attended') {
            // ignore non-attended sessions
            continue;
        }

        if (startDate > moment()) { 
            // ignore future sessions
            continue;
        }

        let monthDiff = now.diff(startDate, 'months');

        if (isNaN(monthDiff)) {
            // moment couldn't parse the start date. Ignore.
            continue;
        }
        
        res[res.length - 1 - monthDiff]++;
    }

    return res;
}

setInterval(getAdminData, 1000*5*60 ); // every 1hour

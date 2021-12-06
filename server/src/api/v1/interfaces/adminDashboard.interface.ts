import { Document } from "mongoose";

interface IAdminDAshboard extends Document {

    upcomingSessions:number[];
    nonDeliveredSessions: number[];
    pendingQuestionnaires: number[];
    sessionsCompletedYouthMentors:number[];
    sessionsCompletedIntoSchoolMentors:number[];
    sessionsCompletedWomenMentors:number[];
};

export default IAdminDAshboard;



import mongoose from 'mongoose';
import IAdminDashboard from '../interfaces/adminDashboard.interface';

const AdminDashboardSchema= new mongoose.Schema({

    upcomingSessions: {
        type: [Number],
        required: true
    },
    nonDeliveredSessions: {
        type: [Number],
        required: true
    },
    pendingQuestionnaires: {
        type: [Number],
        required: true
    },
    sessionsCompletedYouthMentors: {
        type: [Number],
        required: true
    },
    sessionsCompletedIntoSchoolMentors: {
        type: [Number],
        required: true
    },
    sessionsCompletedWomenMentors: {
       type: [Number],
       required: true
    }
});

const AdminDashboard= mongoose.model<IAdminDashboard>(
    "AdminDashboarad", AdminDashboardSchema
);

export default AdminDashboard;
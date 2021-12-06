import mongoose, { ConnectOptions, Error, Mongoose, Number } from "mongoose";
import { DB, DB_PORT, DB_URL } from "../../../config/config";
import User from "./user.model";
import AdminDashboard from "./adminDashboard.model";

const connectDB = async () => {
    await mongoose
        .connect(`mongodb://${DB_URL}:${DB_PORT}/${DB}`, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
        .then(() => {
            initial();
            console.log("Successfully connected to MongoDB.");
        }) 
        .catch(err => {
            console.error("Connection error", err);
        });
};

const initial = async () => { 
    // when connecting to the database, they will be here
    console.log("initial is being called");

    // create an admin user if it doesn't exist
    let user = await User.findOne({email: "admin@bt.com"});
    if (!user) {
        let newAdmin = new User({
            email: "admin@bt.com",
            personID: 0,
            password: "1234",
            roles: ["user", "admin"],
        });
        newAdmin = await newAdmin.save();
    } 
    
    // populate the admin dashboard data for the first time
    let data = await AdminDashboard.findOne({});
    if(!data) {
        console.log("populating the admin dashboard..");
        let newData = new AdminDashboard({
            upcomingSessions: [11, 15, 12],
            nonDeliveredSessions: [4, 5, 6],
            pendingQuestionnaires: [3, 5, 7],
            sessionsCompletedYouthMentors: [10, 12, 19, 3, 5, 2, 3, 22, 11, 4, 8, 9],
            sessionsCompletedIntoSchoolMentors: [10, 12, 19, 3, 5, 2, 3, 22, 11, 4, 8, 9],
            sessionsCompletedWomenMentors: [10, 12, 19, 3, 5, 2, 3, 22, 11, 4, 8, 9],
        })
        newData = await newData.save();
    }
    
};

export default connectDB;
import mongoose from "mongoose";
import IUser from "../interfaces/user.interface";

const UserSchema= new mongoose.Schema({ 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    roles: [
        {
            type: String,
            default: "mentor",
            enum: ["mentor", "youth_mentor", "into_school_mentor", "women_mentor", "admin", "moderator"]
        }
    ],
});

const User = mongoose.model<IUser>(
    "User", UserSchema
);

export default User;
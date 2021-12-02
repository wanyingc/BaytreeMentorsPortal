import { timeStamp } from "console";
import mongoose from "mongoose";
import IUser from "../interfaces/user.interface";

const UserSchema= new mongoose.Schema({ 
    email: {
        type: String,
        required: true,
        unique: true
    },
    personID: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
            type: String,
            default: "mentor",
            enum: ["user", "mentor", "youth_mentor", "into_school_mentor", "women_mentor", "admin", "moderator"]
        }
    ],
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
    },
    token:{
        type:String,
        required:false
    }
});

UserSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

const User = mongoose.model<IUser>(
    "User", UserSchema
);

export default User;
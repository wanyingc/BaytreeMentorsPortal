import { string } from "joi";
import mongoose from "mongoose";
import IGoal from "../interfaces/goal.interface";

const GoalSchema= new mongoose.Schema({ 
    goalID: {
        type: Number,
        required: true,
        unique: true
    },
    menteeName: {
        type: String,
        required: true
    },
    mentorEmail: {
        type: String,
        required: true
    },
    date: {
        type:Date,
        required: true
    },
    reviewDate: {
        type: Date,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    status: [
        {
            type: String,
            default: "in_progress",
            enum: ["achieved", "in_progress", "recalibrated"]
        }
    ]
});

GoalSchema.pre('save', function(next) {
    this.date = Date.now();
    next();
});

const Goal = mongoose.model<IGoal>(
    "Goal", GoalSchema
);

export default Goal;
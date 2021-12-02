import { string } from "joi";
import mongoose from "mongoose";
import IGoal from "../interfaces/goal.interface";

const GoalSchema= new mongoose.Schema({ 
    mentorID: {
        type: String,
        required: true
    },
    menteeName: {
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
            required: true,
            enum: ["achieved", "in_progress", "not_achieved"]
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
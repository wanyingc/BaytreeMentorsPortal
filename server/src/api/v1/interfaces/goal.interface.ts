import { Document } from "mongoose";

interface IGoal extends Document {
    goalID:number;
    menteeName:string;
    mentorEmail:string;
    date: Date;
    reviewDate: Date;
    notes: string;
    status: string[];
};

export default IGoal;
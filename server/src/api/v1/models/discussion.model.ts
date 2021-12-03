import mongoose from "mongoose";
import Message from "../interfaces/discussion.interface";

const DiscussionSchema= new mongoose.Schema({ 
    email: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date()
    },
});

DiscussionSchema.pre('save', function(next) {
    this.date = Date.now();
    next();
});

const Discussion = mongoose.model<Message>(
    "Discussion", DiscussionSchema
);

export default Discussion;
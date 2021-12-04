import mongoose from "mongoose";
import Message from "../interfaces/discussion.interface";

const DiscussionSchema= new mongoose.Schema({ 
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    header:{
        type:String
    },
    message: {
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
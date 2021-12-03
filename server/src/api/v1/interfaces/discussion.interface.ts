import { Document } from "mongoose";

interface Message extends Document {
    email: string;
    text: string;
    date: Date|string;
};

export default Message;
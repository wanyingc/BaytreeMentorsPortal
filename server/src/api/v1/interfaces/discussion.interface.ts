import { Document } from "mongoose";

interface Message extends Document {
    firstName:string,
    lastName:string,
    email: string;
    header:string;
    message: string;
    postDate: Date|string;
};

export default Message;
import { Document } from "mongoose";

interface Message extends Document {
    firstName:string,
    lastName:string,
    header:string;
    message: string;
    postDate: Date|string;
};

export default Message;
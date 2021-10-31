import { Document } from "mongoose";

interface IUserInfo extends Document {
    fistName:string;
    lastName:string;
    email:string;
    phone:number;
};

export default IUserInfo;
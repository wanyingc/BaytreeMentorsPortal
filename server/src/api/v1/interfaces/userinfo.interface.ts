import { Document } from "mongoose";

interface IUserInfo extends Document {
    personID:number;
    firstName:string;
    lastName:string;
    email:string;
    phone:number|string;
    startDate:Date|string;
};

export default IUserInfo;
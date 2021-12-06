import { Document } from "mongoose";

interface IUser extends Document {
    email: string;
    personID: number;
    password: string;
    roles: string[];
    forget_password_token:string;
};

export default IUser;
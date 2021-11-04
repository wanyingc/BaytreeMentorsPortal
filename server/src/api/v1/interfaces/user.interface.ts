import { Document } from "mongoose";

interface IUser extends Document {
    email: string;
    personID: number;
    password: string;
    roles: string[];
};

export default IUser;
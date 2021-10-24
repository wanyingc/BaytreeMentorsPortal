import { Document } from "mongoose";

interface IUser extends Document {
    email: string;
    password: string;
    roles: string[];
    accessToken: string;
};

export default IUser;
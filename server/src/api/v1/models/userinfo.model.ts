import mongoose from 'mongoose';
import IUserInfo from '../interfaces/userinfo.interface';

const UserInfoSchema= new mongoose.Schema({
    personID: {
        type: Number,
        required: true
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type: mongoose.Schema.Types.Mixed,
        unique:true
    },
    startDate: {
        type: mongoose.Schema.Types.Mixed,
    },
});

const UserInfo= mongoose.model<IUserInfo>(
    "UserInfo", UserInfoSchema
);

export default UserInfo;
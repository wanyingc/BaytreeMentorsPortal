import mongoose from 'mongoose';
import IUserInfo from '../interfaces/userinfo.interface';

const UserInfoSchema= new mongoose.Schema({
    fistName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    }
});

const UserInfo= mongoose.model<IUserInfo>(
    "UserInfo", UserInfoSchema
);

export default UserInfo;
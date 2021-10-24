import mongoose from "mongoose";
import IUser from "../interfaces/user.interface";

const UserSchema= new mongoose.Schema({
   email: {
       type:String,
       required: true,
       unique: true
   },
   password:{
       type:String,
       require:true
   },
   roles: [
       {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role" 
       }
   ],
   accessToken: {
       type:String,
   }
});

const User = mongoose.model<IUser>(
    "User", UserSchema
);

export default User;
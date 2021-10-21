import mongoose from "mongoose";

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
   ]
});

const User = mongoose.model(
    "User", UserSchema
);

export default User;
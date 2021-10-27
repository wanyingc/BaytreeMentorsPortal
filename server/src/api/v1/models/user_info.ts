const mongoose=require('mongoose');

const user_info= new mongoose.Schema({
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
        required:true
    },
    phone:{
        type:Number,
        required:true
    }

});
const user= mongoose.model("mentor_list", user_info);
module.exports= user;
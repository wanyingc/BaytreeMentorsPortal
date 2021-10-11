const mongoose= require('mongoose');
const clientSchema= new mongoose.Schema({
firstName:{
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
    unique:true
},
phoneNumber:{
    type:Number,
    required:true,
    unique:true
},
occupation:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
country:{
    type:String,
    required:true
},
postalCode:{
    type:String,
    required:true
},
mentorType:{
    type:String,
    required:true
},
});

const client= mongoose.model("Client_personal",clientSchema);

module.exports=client;

import mongoose from 'mongoose'
const clientSchema= new mongoose.Schema({
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
primaryID:{
    type:Number,
    required:true,
    unique:true
},
phoneNumber:{
    type:Number,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
}
});
const client= mongoose.model("Client",clientSchema)

module.exports(client);

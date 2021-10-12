const express=require('express');
const mongoose=require('mongoose');
// import clientmodel from './models/Clients'
const app=express();
app.use(express.json());
// var client_inter= {
//     firstName:String,
//     lastName:String,
//     email:String,
//     phoneNumber:Number,
//     occupation:String,
//     address:String,
//     country:String,
//     postalCode:String,
//     mentorType:String
//   }
mongoose.connect("mongodb+srv://group_Mars:tothemoon@cluster0.bby83.mongodb.net/CMPT373?retryWrites=true&w=majority");
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
    
const clientmodel= mongoose.model("Client_personal",clientSchema);

app.get('/',async(req,res) => {
    const client=new clientmodel({
        firstName:"Demo",
        lastName:"Last",
        email:"kjds@google.ca",
        phoneNumber:"234",
        occupation:"fdeqwe",
        address:"rfwe",
        country:"vredc",
        postalCode:"rfedxs",
        mentorType:"rfweds"

    });
    res.send("Hello world");

    try{
        await client.save();

    }
    catch(err){
        console.log(err);
    }
});
app.listen(3001,()=>{
    console.log("App is tunning on localhost 3001")
}
);

const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors')
// import clientmodel from './models/Clients'
const app=express();
app.use(express.json());
app.use(cors());
// interface client_inter {
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

app.post('/insertclient',async(req,res) => {
    const client=new clientmodel({
        firstName:"Deklnnlmo",
        lastName:"Laskmn kkjnt",
        email:"kjknnjknds@google.ca",
        phoneNumber:"908083",
        occupation:"fdeqwe",
        address:"rfwe",
        country:"vredc",
        postalCode:"rfedxs",
        mentorType:"rfweds"

    });
    res.send("Inserted Client");

    try{
        await client.save();

    }
    catch(err){
        console.log(err);
    }
});

const loginSchema= new mongoose.Schema({
     phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
    });
    
const loginmodel= mongoose.model("Client_login",loginSchema);

app.post('/login',async(req,res) => {
    const phoneNumber=req.body.phoneNumber
    console.log(phoneNumber)
    const password=req.body.password;
    console.log(password)
    const login=new loginmodel({
        phoneNumber:phoneNumber,
        password:password
    });


    res.send("Inserted login");

    try{
        await login.save();

    }
    catch(err){
        console.log(err);
    }
});
app.listen(3001,()=>{
    console.log("App is tunning on localhost 3001")
}
);

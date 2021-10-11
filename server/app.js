const express=require ("express");
const  mongoose= require('mongoose');
const clientmodel= require('./models/Clients');
// import clientmodel from './models/Clients'
const app=express();

mongoose.connect("mongodb+srv://group_Mars:tothemoon@cluster0.bby83.mongodb.net/CMPT373?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

app.get('/',async (req,res)=>{
    const client=new clientmodel({
        firstName: "Hello",
        lastName:"abc",
        primaryID:123,
        phoneNumber:987,
        password:"ljads"

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
    console.log("App is tunning on localhost 3002")
}
);

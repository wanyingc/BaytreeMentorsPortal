const express=require ("express");
const  mongoose= require('mongoose');
const clientmodel= require('./models/Clients');
// import clientmodel from './models/Clients'
const app=express();
app.use(express.json());

mongoose.connect("mongodb+srv://group_Mars:tothemoon@cluster0.bby83.mongodb.net/CMPT373?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

app.get('/',async (req,res)=>{
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

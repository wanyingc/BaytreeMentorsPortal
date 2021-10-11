import express from "express"
import mongoose from 'mongoose'
// import clientmodel from './models/Clients'
const app=express()
app.set("port",3001);
app.use(express.json);

mongoose.connect("mongodb+srv://group_Mars:tothemoon@cluster0.bby83.mongodb.net/CMPT373?retryWrites=true&w=majority");


app.get('/',(req:any,res:any)=>{
    res.send("Hello world");
})
app.listen(app.get("port"),()=>{
    console.log("App is tunning on localhost 3001")
}
)
const express=require('express');
import mongoose from 'mongoose';
import loginRouter from './src/api/v1/routes/login.route';
import testRouter from './src/api/v1/routes/test.route';
import mentorRouter from '/Users/dhairyakalra/prj/server/src/api/v1/routes/mentor.route';
const user= require( './src/api/v1/models/user_info');

const bodyParser = require("body-parser");
const cors = require('cors');

import { Request, Response } from 'express';
import connectDB from './src/api/v1/models/index';

const app=express();
let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json()); // content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // content-type - application/x-www-form-urlencoded

connectDB(); // Connects to database at the port # mentioned in db.config.ts

app.get("/", (req:Request, res:Response) => {
    res.json({ message: "default page for the server"});
});

app.use("/", loginRouter);

// This router is only for testing, and demonstrates example for authority based API requests
app.use("/", testRouter);
app.use("/",mentorRouter);

const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`App is running on localhost ${PORT}.`);
});

// app.post("/insert",async(req:Request,res:Response)=>{
//     const mentors=new user({
//         fistName:"Mentorjk",
//         lastName:"1",
//         email:"mentor1@gmail.com",
//         phone:"98323"
//     });
//     try{
//         await mentors.save();
//     }
//     catch(err){
//         console.log(err);
//     }

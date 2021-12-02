const express=require('express');
import loginRouter from './src/api/v1/routes/login.route';
import testRouter from './src/api/v1/routes/test.route';
import mentorListRouter from './src/api/v1/routes/mentorlist.route';

const bodyParser = require("body-parser");
const cors = require('cors');

import { Request, Response } from 'express';
import connectDB from './src/api/v1/models/index';
import recordsRouter from './src/api/v1/routes/records.route';
import profileRouter from './src/api/v1/routes/profile.route';
import { PORT } from './src/config/config';
import createSessionRouter from './src/api/v1/routes/createsession.route';
import forgotRoute from './src/api/v1/routes/forgotPass.route'
import resetRoute from './src/api/v1/routes/resetPass.route'

const app=express();

app.use(cors());

app.use(bodyParser.json()); // content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // content-type - application/x-www-form-urlencoded

connectDB(); // Connects to database at the port # mentioned in db.config.ts

app.get("/api", (req:Request, res:Response) => {
    res.json({ message: "default page for the server"});
});

app.use("/api", loginRouter);
app.use("/api",mentorListRouter);
app.use("/api", recordsRouter);
app.use("/api", profileRouter);
app.use("/api", createSessionRouter);
app.use("/api", forgotRoute);
app.use("/api", resetRoute);

// This router is only for testing, and demonstrates example for authority based API requests
app.use("/api", testRouter);

app.listen(PORT,()=>{
    console.log(`App is running on localhost ${PORT}.`);
});
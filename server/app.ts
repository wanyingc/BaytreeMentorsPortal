const express=require('express');
import loginRouter from './src/api/v1/routes/login.route';
import testRouter from './src/api/v1/routes/test.route';
import mentorListRouter from './src/api/v1/routes/mentorlist.route';

const bodyParser = require("body-parser");
const cors = require('cors');

import { Request, Response } from 'express';
import connectDB from './src/api/v1/models/index';

const app=express();
let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors());

app.use(bodyParser.json()); // content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // content-type - application/x-www-form-urlencoded

connectDB(); // Connects to database at the port # mentioned in db.config.ts

app.get("/", (req:Request, res:Response) => {
    res.json({ message: "default page for the server"});
});

app.use("/", loginRouter);
app.use("/",mentorListRouter);

// This router is only for testing, and demonstrates example for authority based API requests
app.use("/", testRouter);

const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`App is running on localhost ${PORT}.`);
});
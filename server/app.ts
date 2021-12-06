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
import questionnairelistRouter from './src/api/v1/routes/questionnairelist.route';
import createSessionRouter from './src/api/v1/routes/createsession.route';
import mentorHomeRouter from './src/api/v1/routes/mentorhome.route';
import questionsListRouter from './src/api/v1/routes/questionslist.route'
import discussionRouter from './src/api/v1/routes/discussion.route';
import createDiscussion from './src/api/v1/routes/createDiscussion.route';

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
app.use("/api", questionnairelistRouter)
app.use("/api", createSessionRouter);
app.use("/api", mentorHomeRouter);
app.use("/api", questionsListRouter);
app.use("/api", discussionRouter);
app.use("/api",createDiscussion);

// This router is only for testing, and demonstrates example for authority based API requests
app.use("/api", testRouter);

app.listen(PORT,()=>{
    console.log(`App is running on localhost ${PORT}.`);
});
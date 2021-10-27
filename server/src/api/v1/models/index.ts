import { ErrorRequestHandler } from "express";
import mongoose, { ConnectOptions, Error, Number } from "mongoose";
import DBConfig from "../../../config/db.config";
import Role from "./role.model";
const User = require("./user.model");



const connectDB = async () => {
    console.log("Hello")
    await mongoose
        .connect(`mongodb+srv://group_Mars:tothemoon@cluster0.bby83.mongodb.net/test?authSource=admin&replicaSet=atlas-1zcv1d-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
        .then(() => {
            initial();
            console.log("Successfully connected to MongoDB.");
        }) 
        .catch(err => {
            console.error("Connection error", err);
        });
};

function initial() {
    // if some values are required to initialize 
    // when connecting to the database, they will be here
    console.log("initial is being called");
};

export default connectDB;
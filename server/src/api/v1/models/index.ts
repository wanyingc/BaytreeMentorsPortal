import { ErrorRequestHandler } from "express";
import mongoose, { ConnectOptions, Error, Number } from "mongoose";
import DBConfig from "../../../config/db.config";
const User = require("./user.model");

const connectDB = async () => {
    await mongoose
        .connect(`mongodb://${DBConfig.HOST}:${DBConfig.PORT}/${DBConfig.DB}`, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
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
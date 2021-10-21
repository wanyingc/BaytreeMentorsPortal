import { ErrorRequestHandler } from "express";
import mongoose, { ConnectOptions, Error, Number } from "mongoose";
import DBConfig from "../../../config/db.config";
import Role from "./role.model";
import User from "./user.model";


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
    // Role.estimatedDocumentCount((err:ErrorRequestHandler, count:number) => {
    //     if (!err && count === 0) {
    //         new Role({
    //           name: "youth_mentor"
    //         }).save(err => {
    //           if (err) {
    //             console.log("error", err);
    //           }
      
    //           console.log("added 'youth_mentor' to roles collection");
    //         });
      
    //         new Role({
    //           name: "into_school_mentor"
    //         }).save(err => {
    //           if (err) {
    //             console.log("error", err);
    //           }
      
    //           console.log("added 'into_school_mentor' to roles collection");
    //         });

    //         new Role({
    //           name: "women_mentor"
    //         }).save(err => {
    //           if (err) {
    //             console.log("error", err);
    //           }
      
    //           console.log("added 'women_mentor' to roles collection");
    //         });

    //         new Role({
    //           name: "moderator"
    //         }).save(err => {
    //           if (err) {
    //             console.log("error", err);
    //           }
      
    //           console.log("added 'moderator' to roles collection");
    //         });
      
    //         new Role({
    //           name: "admin"
    //         }).save(err => {
    //           if (err) {
    //             console.log("error", err);
    //           }
      
    //           console.log("added 'admin' to roles collection");
    //         });
    //     }
    // });
    console.log("initial is being called");
};

export default connectDB;
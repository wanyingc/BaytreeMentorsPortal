import mongoose, { ConnectOptions } from "mongoose";
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
    // Add roles here
    console.log("initial is being called");
};

export default connectDB;
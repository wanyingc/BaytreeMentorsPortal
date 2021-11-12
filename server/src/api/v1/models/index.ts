import mongoose, { ConnectOptions, Error, Mongoose, Number } from "mongoose";
import { DB, DB_PORT, DB_URL } from "../../../config/config";
import User from "./user.model";

const connectDB = async () => {
    await mongoose
        .connect(`mongodb://${DB_URL}:${DB_PORT}/${DB}`, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
        .then(() => {
            initial();
            console.log("Successfully connected to MongoDB.");
        }) 
        .catch(err => {
            console.error("Connection error", err);
        });
};

const initial = async () => {
    // if some values are required to initialize 
    let user = await User.findOne({email: "admin@bt.com"});
    if (!user) {
        let newAdmin = new User({
            email: "admin@bt.com",
            personID: 0,
            password: "1234",
            roles: ["user", "admin"],
        });
        newAdmin = await newAdmin.save();
    } 
    // when connecting to the database, they will be here
    console.log("initial is being called");
};

export default connectDB;
import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import authConfig from '../../../config/auth.config';
import User from "../models/user.model";
import UserInfo from '../models/userinfo.model';
import checkRoles from '../services/roles.service';
const Joi = require('joi');

const logTitle = "Login Controller";

const signupController = async (req:Request, res:Response, next:NextFunction) => {
    // Validate the request
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        roles: Joi.array().items(Joi.string().valid("user", "mentor", "youth_mentor", "into_school_mentor", "women_mentor", "admin", "moderator"))
    });

    const { error } = schema.validate(req.body);  
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    // Check if the mentor is already registered
    let user = await User.findOne({email: req.body.email});
    if (user) {
        return res.status(400).json({
            message: "That user already exisits!"
        }); 
    } 

    // Check Views API if the user exists there, if does, then store PersonID in "users", 
    //      and insert names and phone to the userinfos collection
    let firstName, lastName, phone, roleFromViews, personID, startDate;
    try {
        const resp = await axios.get(`https://app.viewsapp.net/api/restful/contacts/volunteers/search?Email=${req.body.email}`, 
        {
            headers: {
                "Content-Type": "application/json"
            },
            auth: {
                username: 'group.mars',
                password: 'RDhQ2kJ#v&8u'
            }
        });
        let keysVolCount = Object.keys(resp.data);
        let keysVolId = Object.keys(resp.data[keysVolCount[0]]);
        if(keysVolId.length === 0){
            return res.status(404).json({
                error: "User not found on Views"
            });
        } else if (keysVolId.length > 1) {
            return res.status(400).json({
                error: "More than one user with same email on Views"
            });
        }
        personID = resp.data[keysVolCount[0]][keysVolId[0]].PersonID;
        firstName = resp.data[keysVolCount[0]][keysVolId[0]].Forename;
        lastName = resp.data[keysVolCount[0]][keysVolId[0]].Surname;
        const startDateRetrieved = resp.data[keysVolCount[0]][keysVolId[0]]['Startdate_V_37'];
        startDate = new Date(startDateRetrieved);
        roleFromViews = resp.data[keysVolCount[0]][keysVolId[0]]['Volunteerrole_V_34'];
        phone = resp.data[keysVolCount[0]][keysVolId[0]]['Mobile'];
        if(phone.length === 0){
            phone = resp.data[keysVolCount[0]][keysVolId[0]]['Telephone'];
        }
        let roleToAdd = checkRoles(roleFromViews);
        console.log(personID + ", "+ firstName + ", "+ lastName + ", " + startDate + ", " + roleToAdd + ", "+ phone);

        const roles = ["user", "mentor", roleToAdd];

        // Insert the new mentor to the database
        let newUser = new User({
            email: req.body.email,
            personID: personID,
            password: req.body.password,
            roles: roles
        });

        // Insert the new mentor to the database
        let newUserInfo = new UserInfo({
            personID: personID,
            firstName: firstName,
            lastName: lastName,
            email: req.body.email,
            phone: phone,
            startDate: startDate,

        });

        newUser = await newUser.save();
        newUserInfo = await newUserInfo.save();

        // Return inserted mentor to the client
        return res.status(200).json({
            email: newUser.email,
            personID: newUser.personID,
            roles: newUser.roles,
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }

    

};

export default signupController;
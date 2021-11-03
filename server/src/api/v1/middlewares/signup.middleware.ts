import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import getRoles from '../services/roles.service';

const logTitle = "Signup MW";

const gatherDataFromViewsAPIMW = async (req:Request, res:Response, next:NextFunction) => {
    let firstName, lastName, phone, rolesFromViews, personID, startDate;
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

        let keyVolCount = Object.keys(resp.data); // Retrieves first layer of Key from the JSON: key: volunteerCount...
        let keysVolId = Object.keys(resp.data[keyVolCount[0]]); // Using previous key, get new keys, each of which represent one user. key: volunteerId...
        if(keysVolId.length === 0){
            return res.status(404).json({
                error: "User not found on Views"
            });
        } else if (keysVolId.length > 1) {
            return res.status(400).json({
                error: "More than one user with same email on Views"
            });
        }

        // check for each value required by the frontend
        // Deriving info from Views response schema
        personID = resp.data[keyVolCount[0]][keysVolId[0]].PersonID;
        if(!personID) {
            return res.status(404).send({
                error: "No personID on Views",
            });
        } else {
            res.locals.personID = personID;
        }
        firstName = resp.data[keyVolCount[0]][keysVolId[0]].Forename;
        if(!firstName){
            firstName = "";
        }
        lastName = resp.data[keyVolCount[0]][keysVolId[0]].Surname;
        if(!lastName){
            lastName = "";
        }

        const startDateRetrieved = resp.data[keyVolCount[0]][keysVolId[0]]['Startdate_V_37'];
        startDate = startDateRetrieved ? new Date(startDateRetrieved) : "";

        phone = resp.data[keyVolCount[0]][keysVolId[0]]['Mobile'];
        if(phone.length === 0){
            phone = resp.data[keyVolCount[0]][keysVolId[0]]['Telephone'];
            if(!phone){
                phone = "";
            }
        }
        
        rolesFromViews = resp.data[keyVolCount[0]][keysVolId[0]]['Volunteerrole_V_34'];
        let rolesToAdd: string[];
        if(rolesFromViews){
            rolesToAdd = getRoles(rolesFromViews);
        } else {
            rolesToAdd = [];
        }

        let roles:string[] = ["user", "mentor"]; // 2 default roles
        roles = roles.concat(rolesToAdd); // adding roles derived from Views

        // return res.status(200).send(roles);

        res.locals.roles = roles;
        res.locals.firstName = firstName;
        res.locals.lastName = lastName;
        res.locals.phone = phone;
        res.locals.startDate = startDate;

        next();
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
};

export default { gatherDataFromViewsAPIMW };
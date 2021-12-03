import { Request, Response } from 'express';
import axios from 'axios';
import { getResponseArray } from '../services/responseToArray.service';
import { VIEWS_PASSWORD, VIEWS_USERNAME } from '../../../config/config';
import AdminDashboard from '../models/adminDashboard.model';

const logTitle = "AdminData Controller";

const adminDataController = async (req:Request, res:Response) => {
    
    let data = await AdminDashboard.findOne({});
    res.status(200).send({data});
};

export default  adminDataController ;
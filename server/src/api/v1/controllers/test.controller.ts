// Test authorization
import { Request, Response } from 'express';

const testAuthMentorController = (req:Request, res:Response) => {
    res.status(200).send({
        message: "Mentor access!",
        response: req.body
    });
};

const testAuthAdminController = (req:Request, res:Response) => {
    res.status(200).send({
        message: "Admin access!",
        response: req.body
    });
};

const testAuthModeratorController = (req:Request, res:Response) => {
    res.status(200).send({
        message: "Mod access!",
        response: req.body
    });
};

export default {testAuthAdminController, testAuthMentorController, testAuthModeratorController};
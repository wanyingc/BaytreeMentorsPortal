// Test authorization
import { Request, Response } from 'express';

const testAuthMentorController = (req:Request, res:Response) => {
    res.status(200).send({
        message: "Mentor access!"
    });
};

const testAuthAdminController = (req:Request, res:Response) => {
    res.status(200).send({
        message: "Admin access!"
    });
};

const testAuthModeratorController = (req:Request, res:Response) => {
    res.status(200).send({
        message: "Mod access!"
    });
};

export default {testAuthAdminController, testAuthMentorController, testAuthModeratorController};
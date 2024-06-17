import { User } from './../models/User';
import { Note } from './../models/notes';
import userRouter from "../routes/userRouter";
import express, {NextFunction, Request, Response} from "express";



// get users
const getAllUsers = async (req: Request, res: Response, next: NextFunction)=>{
    

    next();
}
// create user
const createNewUser = async (req: Request, res: Response, next: NextFunction)=>{


    next();
}
// update user
const updateUser = async (req: Request, res: Response, next: NextFunction)=>{


    next();
}
// delete user
const deleteUser = async (req: Request, res: Response, next: NextFunction)=>{


    next();
}

export {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}
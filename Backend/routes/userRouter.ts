import express, {NextFunction, Request, Response} from "express";
import {getAllUsers, createNewUser, updateUser, deleteUser} from "../Controllers/userController"
const userRouter = express.Router();

userRouter.route("/")
    .get(getAllUsers)
    .post(createNewUser)
    .patch(updateUser)
    .delete(deleteUser)

export default userRouter;
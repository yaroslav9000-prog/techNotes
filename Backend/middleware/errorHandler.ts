import express, {ErrorRequestHandler ,Response, Request, NextFunction} from "express";
import { logEvents } from "./logger";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) =>{
    if(err){
    logEvents(`${err.message}, ${err.name}, ${req.originalUrl}, ${req.url}, ${req.headers.origin}`, "errorLogs.txt");
    console.log(err.stack);
    res.status(200).json({"message": "error has occured"});
    }
    next();
}

import express, {ErrorRequestHandler ,Response, Request, NextFunction} from "express";
import { logEvents } from "./logger";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) =>{
    logEvents(`${err.name}, ${err.message} \t ${req.method}, ${req.url} \t${req.headers.origin}` , "errLogs.txt");
    console.log(err.stack);
    
    const status = req.statusCode ? req.statusCode: 500;

    res.status(status)
    res.send({"error message": err.message})
}

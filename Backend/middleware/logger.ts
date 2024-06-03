import fsPromises from "fs/promises";
import fs from "fs";
import path from "path";
import express, {NextFunction, Request, Response} from "express";
import {format } from "date-fns";


const logEvents = async (message: string ,logFileName: string) =>{
    const dateTime = `${format(new Date(),('yyyyMMdd\tHH:mm:ss'))}`
    const logItem = `${dateTime}, ${message} \n`;
    try{
        if(!fs.existsSync(path.join(__dirname, "../", "logs"))){
            fs.mkdirSync(path.join(__dirname, "../", "logs"));
        }
        fsPromises.appendFile(path.join(__dirname, "../", "logs", logFileName),logItem)
    }catch(err){
        console.error(err);
    }
}

const logger = async (req: Request, res: Response, next: NextFunction)=>{
    try{
        logEvents(`${req.url}, ${req.method}, ${req.originalUrl}`, "logs.txt");
        console.log(`${req.method} request was logged`);
    }catch(err){
        console.error(err);
    }
    next();
}
export {
    logger,
    logEvents
}
import express, {Request, Response, NextFunction} from "express";
import path from "path";
const rootRouter = express.Router();

rootRouter.get(path.join(__dirname, "../", "views", "index.html"), 
async (req: Request, res: Response, NextFunction: NextFunction)=>{
    res.status(200).sendFile(path.join(__dirname, "../", "views", "index.html"));
})




export {
    rootRouter
}
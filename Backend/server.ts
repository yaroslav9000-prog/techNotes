import express, {Request, Response, NextFunction} from "express";
import path from "path";
import { rootRouter } from "./routes/rootRouter";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter";
import { json } from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3500;

app.use(logger);



app.use(express.json());

app.use(cors)

app.use("/", express.static(path.join(__dirname, "views")));

app.use("/", rootRouter)

app.use("/users", userRouter);

app.all("*", (req: Request, res: Response)=>{
    res.status(404)
    if(req.accepts("html")){
        res.sendFile(path.join(__dirname, "views", "404.html"))
    }else if( req.accepts("json")){
        res.json({message: "404 not found"})
    }else{
        res.type("txt").send("404 not found")
    }
});

//where i will save my files from upload
// app.use(express.static("upload"));

//enable file uploading, and create a path for the files if it no exists
// app.use(fileUpload({createParentPath: true}));


app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`Server up and running on port: ${PORT}`);
})



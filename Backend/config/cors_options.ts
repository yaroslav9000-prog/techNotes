export const corsOptions = {
    origin: (origin: any, callback: any)=>{
        if(require("../config/source_list").indexOf(origin) != -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionSuccessStatus: 200
}
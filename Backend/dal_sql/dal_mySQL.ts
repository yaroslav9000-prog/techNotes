import mysql from "mysql2";
import config from "../config/config";

//in order to create connection to mysql i need to set parameters object.
const connection = mysql.createPool({
    host: config.mySQLhost,
    user: config.mySQLuser,
    password: config.mySQLpassword,
    database: config.mySQLdb
});

console.log("connected to mySQL database");

const execute = (sql: string):Promise<any>=>{
    return new Promise<any>((resolve, reject)=>{
        connection.query(sql,(err, result)=>{

            if(err){
                reject(err);
                return;
            }else{
                resolve(result);
            }
        })
    })
}
export default execute;
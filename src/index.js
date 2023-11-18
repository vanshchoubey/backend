import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
.then(() => {
    app.on('error',(error)=>{
        console.log("error",error)
    })
    // const PORT= process.env.PORT
    app.listen( 3000,()=>{
        console.log(`Server started at port : ${process.env.PORT}`)
    })
}).catch((err) => {
    console.log("MONGODB CONNECTION FAILED !!! :",err)
});

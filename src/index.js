import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:'./env'
})
// connectDB()
;(async()=>{
    try {
        await connectDB()
    } catch(err) {
            console.log("MONGODB CONNECTION FAILED !!! :",err)
    }
})()

// .then(() => {
//     app.on("error",(error)=>{
//         console.log("error",error)
//         throw error
//     })

//     app.listen(process.env.PORT || 8080,()=>{  
        
//         console.log(`Server started at port : ${process.env.PORT}`)
//     })
// }).catch((err) => {
//     console.log("MONGODB CONNECTION FAILED !!! :",err)
// });
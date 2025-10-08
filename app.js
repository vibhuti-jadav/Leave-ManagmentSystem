import dotenv from "dotenv"

dotenv.config({path:"./env/.env"})

import express from "express";
import connectDB from "./config/db.js";
import httpError from "./middleware/errorHandler.js";
import userRouter from "./routers/userRouters.js"

const app = express()

app.use(express.json())

app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.status(200).json("hello from server")
})

app.use((req,res,next)=>{
    next(new httpError("requested route not found",404))
})

app.use((error,req,res,next)=>{
    if(req.headerSent){
        return next(error)
    }
    res.status(error.statusCode || 500).json(error.message || "somthing went wrong")

});




const port = process.env.PORT || 5000;


const startServer = async()=>{
    try {
        const connect = await connectDB();

        if(!connect){
            throw new Error("failed to connect db")
        }

        console.log("db connected")

app.listen(port,()=>{
    console.log("sever running on port",port)
})

    } catch (error) {
       console.log(error.message);
       process.exit(1) 
    }
}

startServer()

import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
dotenv.config()
import { UserRouter } from "./routes/User.js"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/auth', UserRouter) // means that any route defined in userRouter will be prefixed with /auth.

//let's connect to database named authentication

mongoose.connect('mongodb://127.0.0.1:27017/authentication')
 

app.listen(process.env.PORT, ()=>{
    console.log('server is running..!')
})
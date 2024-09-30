import express from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/User.js';

const router = express.Router(); //so we don't have to use const app = express(), app.post....

//set up a router 
router.post('/signup' , async (req, res) => {
  const {username, email, password} = req.body
  const user = await User.findOne({email})  //find email from the user model
  if (user)
  {
   return res.json({message: "user already exists"})
  }
  const hashpassword = await bcrypt.hash(password, 10)
  const newUser = new User (
    {
        username,
        email,
        password: hashpassword, 
    }
  )
  await newUser.save()
  return res.json({status: true, message: "record registred"})
})

export {router as UserRouter}
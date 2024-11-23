import express from "express"
import { registerUser } from "../controller/UserController.js";


const userRouter= express.Router();


userRouter.post("/create", registerUser)

export default userRouter
import mongoose, { Mongoose } from "mongoose";

const userShema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    accountnumber:{
        type:String,
        required:true
    }
},{timestamps:true})


export const User= mongoose.model("User",userShema)
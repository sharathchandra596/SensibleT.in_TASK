import { User } from "../MODELS/UserModel.js"

export const registerUser = async (req, res, next) => {
    try {
        const{username,email,accountnumber}=req.body
        if(!username || !email || !accountnumber){
            return res.status(400).json({
                success:false,
                message:"All fields are required.."
            })
        }
        const newuser= await User.create({username,email,accountnumber})
        return res.status(200).json({
            success:true,
            message:"User created successfully",
            data:newuser
        })
    } catch (error) {
        console.log(error);
    }
}
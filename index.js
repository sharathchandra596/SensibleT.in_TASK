import  express from "express";
import { connectDB } from "./DB/connectDB.js";
import transactionRoute from "./routes/transactionRoute.js";
import userRouter from "./routes/userrouter.js";
const app = express();


app.use(express.json());

app.listen(3000,()=>{
    connectDB();
    console.log("server is running on port 3000");
})

app.use("/api/transaction",transactionRoute);
app.use("/api/user",userRouter);

import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import cors from "cors";
import blogroutes from "./routes/blogroutes.js"

dotenv.config();
connectDB();

const app=express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Blogging app running")
});

app.use("/api/blogs",blogroutes)
const PORT=process.env.PORT|| 5000;
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})
app.use("/api/blogs",blogroutes);


import express from "express";
import Blog from "../model/Blog.js";

const router=express.Router();

router.post("/",async(req,res)=>{
    try{
        const blog=await Blog.create(req.body);
        res.status(201).json(blog);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
});

router.get("/",async(req,res)=>{
    const blogs=await Blog.find();
    res.json(blogs);
});

export default router;
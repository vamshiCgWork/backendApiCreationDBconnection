import express from "express";
import { createPost,getAllPosts } from "../controllers/post.controllers.js";





const router = express.Router()

router.post("/create-post",createPost)
router.get("/posts",getAllPosts)

export default router
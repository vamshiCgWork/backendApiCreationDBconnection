import express from "express";
import multer from "multer";
import postController from "../controllers/post.controllers.js";

const upload = multer({storage:multer.memoryStorage()})

const router = express.Router()

router.post("/create-post",upload.single("image"),postController.createPost)
router.get("/posts",postController.getAllPosts)

export default router
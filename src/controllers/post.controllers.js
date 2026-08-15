import uploadImage from "../services/storage.service.js"
import Post from "./../models/post.model.js"



 async function createPost(req,res){
    try {

        const {description} = req.body
        const fileName = req.file.originalname
        const bufferBase64String = req.file.buffer.toString('base64')
        const result = await uploadImage(fileName,bufferBase64String)
        const imageLink = result.url
        const post = await Post.create({image:imageLink,description})

        res.status(201).json({
            message:"created post",
            data:post
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
 async function getAllPosts(req,res){
    try {
        const posts = await Post.find()
        res.status(200).json({
            message:"fetched all posts",
            count:posts.length, 
            data:posts
        })
    } catch (error) {
          res.status(500).json({
            message:error.message
        })
    }
}

export default {getAllPosts,createPost}
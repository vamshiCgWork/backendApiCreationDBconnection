import Post from "./../models/post.model.js"



export const createPost=async(req,res)=>{
    try {
        const {imageLink,description} = req.body
        const post = await Post.create({imageLink,description})

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
export const getAllPosts=async(req,res)=>{
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
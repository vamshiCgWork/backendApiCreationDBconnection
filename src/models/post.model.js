import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    imageLink:String,
    description:String
})

const postModel = mongoose.model("post",postSchema)

export default postModel
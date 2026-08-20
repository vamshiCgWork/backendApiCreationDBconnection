import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image: String,
  description: String,
  likes: {
    type: Number,
    default: 0,
  },
  isLiked: {
    type: Boolean,
    default: false,
  },
});

const postModel = mongoose.model("post", postSchema);

export default postModel;

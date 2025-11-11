const Community = require("../models/community.model.js");

// Create a new community post
const createPost = async (req, res) => {
  try {
    const { by, message } = req.body;
    if (!by || !message) {
      return res.status(400).json({ message: "by and message are required" });
    }

    const newPost = new Community({ by, message });
    await newPost.save();

    res.status(201).json({ message: "Post created flagfully", post: newPost ,flag:true });
  } catch (error) {
    res.status(500).json({ message: "Server error", error ,flag:false});
  }
};

// Get posts with reply counts only
const getAllPosts = async (req, res) => {
  try {
    const posts = await Community.find()
      .sort({ at: -1 })
      .select("by message at replies"); // only include replies array for counting

    const postsWithReplyCount = posts.map(post => ({
      _id: post._id,
      by: post.by,
      message: post.message,
      at: post.at,
      replyCount: post.replies.length
    }));

    res.status(200).json({ posts: postsWithReplyCount ,flag:true});
  } catch (error) {
    res.status(500).json({ message: "Server error", error ,flag:false});
  }
};

// Add a reply to a post
const addReply = async (req, res) => {
  try {
    const { postId, by, message } = req.body;
    if (!postId || !by || !message) {
      return res.status(400).json({ message: "postId, by, and message are required" });
    }

    const post = await Community.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" ,flag:false});

    const reply = { by, message, at: new Date() };
    post.replies.push(reply);
    await post.save();

    res.status(200).json({ message: "Reply added flagfully",flag:true ,post });
  } catch (error) {
    res.status(500).json({ message: "Server error",flag:false, error });
  }
};

// Get all replies of a post
const getAllReplies = async (req, res) => {
  try {
    const { postId } = req.body; // get postId from request body
    if (!postId) {
      return res.status(400).json({ flag: false, message: "postId is required" });
    }

    const post = await Community.findById(postId);
    if (!post) return res.status(404).json({ flag: false, message: "Post not found" });

    res.status(200).json({ flag: true, replies: post.replies });
  } catch (error) {
    res.status(500).json({ flag: false, message: "Server error", error });
  }
};



module.exports = {
  createPost,
  getAllPosts,
  addReply,
  getAllReplies
};

const express = require("express");
const router = express.Router();

const { createPost, getAllPosts, addReply,getAllReplies } = require("../controllers/community.controllers.js");

// Create a new community post
router.post("/post", createPost);

// Get all posts
router.get("/getposts", getAllPosts);

// Add a reply to a post
router.post("/reply", addReply);
router.post("/getreply", getAllReplies);

module.exports = router;

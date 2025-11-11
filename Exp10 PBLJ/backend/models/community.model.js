const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
  by: {
    type: String, 
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  at: {
    type: Date,
    default: Date.now
  }
}, { _id: false }); 

const communitySchema = new mongoose.Schema({
  by: {
    type: String, 
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  at: {
    type: Date,
    default: Date.now
  },
  replies: [replySchema] 
}, { timestamps: true }); 

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;

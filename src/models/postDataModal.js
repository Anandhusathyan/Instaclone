const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: String },
    description: { type: String },
    postImage: {required:true},
    date: { type: Date, default: Date.now },
})

const PostModel = mongoose.model('postsCollect',blogSchema);
PostModel.createCollection();

module.exports = PostModel;
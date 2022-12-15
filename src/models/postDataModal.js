const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: String },
    description: { type: String },
    imageName: {type: String},
    date: { type: Date },
})

const PostModel = mongoose.model('postsCollect',postSchema);
PostModel.createCollection();

module.exports = PostModel;
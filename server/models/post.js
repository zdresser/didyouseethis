const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  text: String,
  created: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  group: { type: Schema.Types.ObjectId, ref: "Group" },
},
{
  timestamps: true
})

module.exports = mongoose.model("Post", postSchema)
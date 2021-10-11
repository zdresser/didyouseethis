const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: String,
  author: { type: Schema.Types.ObjectId, ref: "User" },
  post: { type: Schema.Types.ObjectId, ref: "Post" },
},
{
  timestamps: true
  })

commentSchema.pre('deleteMany', { document: false, query: true }, async function (next) {
  const comments = await this.model.find(this.getFilter());

  const ids = comments.map(comment => {
    return comment._id;
  })

  const users = comments.map(comment => {
    return comment.user;
  })

  comments[0].model('User').updateMany({_id: {'$in': users}}, {'$pull': {'comments': {'$in': ids}}}, next)
  })

module.exports = mongoose.model("Comment", commentSchema)
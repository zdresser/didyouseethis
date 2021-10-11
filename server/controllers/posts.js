const User = require('./models/user')
const Group = require('./models/group')
const Post = require('/.models/post')

exports.getPosts = (req, res) => {
  Group.findById(req.params.group)
    //probably need to populate some stuff
    .exec((err, group) => {
      if (err) next(err)
      res.status(200).json(group.posts)
    })
}

exports.getPost = (req, res) => {
  Post.findById(req.params.post)
    .exec((err, post) => {
      if (err) next(err)
      res.status(200).json(post)
    })
}

exports.addPost = (req, res) => {
  Group.findById(req.params.group)
    .exec((err, group) => {
      if (err) next(err)

      const newPost = new Post({
        author: req.body.authorId,
        text: req.body.text,
        group: group._id,
        comments: []
      })

      newPost.save();
      group.posts.push(newPost);
      group.save();
      res.status(200).send(newPost);
    })
}

exports.editPost = (req, res) => {
  if (!req.body) {
    res.status(400).send("No update information included in request body")
    return res.end();
  }

  const update = req.body; 
  Post.findOneAndUpdate({ _id: req.params.post }, update, { new: true })
    .exec((err, updatedPost) => {
      if (err) next(err)
      res.status(200).json(updatedPost)
    })
}

exports.deletePost = (req, res) => {
  //to-do
}
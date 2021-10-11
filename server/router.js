const express = require("express");
const app = express();
const passport = require('passport');


//import models
const Comment = require('./models/comment')
const User = require('./models/user')
const Group = require('./models/group')
const Post = require('./models/post')

//import controllers
const Groups = require('./controllers/groups');
const Posts = require('./controllers/posts')
const Comments = require('./controllers/comments')

//auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

//routes
module.exports = (app) => {
  app.get('/api/groups', Groups.getGroups)
  app.get("/api/groups/:group", Groups.getGroup)
  app.post('/api/groups', Groups.addGroup)
  app.put('/api/groups/:group', Groups.editGroup)
  app.delete('/api/groups/:group', Groups.deleteGroup)

  app.get('/api/groups/:group/posts', Posts.getPosts)
  app.post('/api/groups/:group/posts', Posts.addPost)

  app.post('/api/posts/:post', Posts.getPost)
  app.put('/api/posts/:post', Posts.editPost)
  app.delete('/api/posts/:post', Posts.deletePost)

  app.get('/api/posts/:post/comments', Comments.getComments)
  app.post('/api/posts/:post/comments', Comments.addComment)
  app.get('/api/comments/:comment', Comments.getComment)
  app.put('/api/comments/:comment', Comments.editComment)
  app.delete('/api/comments/:comment', Comments.deleteComment)


  app.post('/auth/login', Authentication.login);
  app.post('/auth/logout', Authentication.logout)
}
const express = require("express");
const app = express();
//import models
const Comment = require('./models/comment')
const User = require('./models/user')
const Group = require('./models/group')
const Post = require('./models/post')

//import controllers
const Groups = require('./controllers/groups')
//auth

module.exports = (app) => {
  app.get('/api/groups', Groups.getGroups)
  app.get("/api/groups/:group", Groups.getGroup)
  app.post('/api/groups', Groups.postGroup)
  app.put('/api/groups/:group')
  // /api/groups/:group group
//                    -- put to edit group members
//                    -- delete group

//get /api/groups/:group/posts - get all posts for a group
// post /api/groups/:group/posts = add post

//get /api/posts/:post - get a post
//put /api/posts/:post - edit post
// delete

//get /api/posts/:post/comments - load all comments for a post
//post                          -- add new comment to post

//get /api/comments/:comment - get one comment
//put
//delete

//post - /auth/login
//post - /auth/logout
}
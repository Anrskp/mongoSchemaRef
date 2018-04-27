// Imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/database');
const user = require('./models/user');
const post = require('./models/post');

// DATABASE CONNECTION

// Promise libary
mongoose.Promise = require('bluebird');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database)
})

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error : ' + err);
});

// Declare express variable
const app = express();

// CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

// DB test
/*
let newUser = new user({
  name : "john"
});

user.addUser(newUser);
*/

let newPost = new post({
  content : "hello",
  author : "5ae2ffef6c6db43020829e77"
});

post.addPost(newPost);


post.getAllPosts((err, post ) => {
  if(err) throw err;
  console.log(post)
})

// Set port number
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log('Server startet on port ' + port);
});

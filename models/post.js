var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  content : String,
  author : {
    type: Schema.ObjectId,
    ref: 'user'
  }
});

const post = module.exports = mongoose.model('post', postSchema);

module.exports.addPost = function(newPost, callback) {
  newPost.save(callback);
}

module.exports.getAllPosts = (callback) => {
  post.find({}, callback).populate('author');
}

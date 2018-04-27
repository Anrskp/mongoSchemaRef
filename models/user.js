var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name : String
});

module.exports = mongoose.model('user', userSchema);

module.exports.addUser = function(newUser, callback) {
  newUser.save(callback);
}

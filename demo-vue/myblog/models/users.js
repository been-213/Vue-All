const mongoose = require('mongoose');

var UsersScheme = new mongoose.Schema({
  Username:String,
  Password:String,
  _login:Boolean
},{collection:'users'});

var UserModel = mongoose.model('users',UsersScheme);
module.exports = UserModel;
const mongoose = require('mongoose');

var TodoTaskSchema = new mongoose.Schema({
  task:String,
},{collection: 'todoList'});

var TodoTaskModel = mongoose.model("todoList", TodoTaskSchema);
module.exports = TodoTaskModel;
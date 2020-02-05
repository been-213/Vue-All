const mongoose = require('mongoose');

var FinishedTaskSchema = new mongoose.Schema({
  task:String,
},{collection: 'finishedList'});
var FinishedTaskModel = mongoose.model("finishedList",FinishedTaskSchema);
module.exports = FinishedTaskModel;
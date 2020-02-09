const mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  UserName:String,
  ArticleTitle:String,
  ArticleTime:Date,
  ArticleCategory:String,
  ArticleContent:String,
},{collection:'blogs'});

var AtricleModel = mongoose.model('blogs', ArticleSchema);
module.exports = AtricleModel;
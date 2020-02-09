var express = require('express');
var api = require('../lib/api');
var router = express.Router();
//查询article列表
router.get('/getArticleList',function(req,res,next){
  api.findArticle({}).then((data) => {
    var titleList = [];
    data.forEach((element,index) => {
      titleList[index] = element.ArticleTitle;
    });
    res.json(titleList);
  });
});
//上传article
router.post('/uploadArticle',function(req,res,next){
  api.findArticle({ArticleTitle:req.body.Title}).then((data) => {
    if(data.length === 0){
      var newArticle = {
        UserName:req.body.Author,
        ArticleTitle:req.body.Title,
        ArticleTime:req.body.Time || '',
        ArticleCategory:req.body.Category,
        ArticleContent:req.body.Content
      };
      api.saveArtical(newArticle).then((data,err) => {
        if(err){
          res.json(JSON.stringify(err));
        }else{
          res.json({message:"Submit Success",_dig:true})
        }
      });
    }else{
      res.json({message:'The Article title is exist',_dig:false});
    }
  })
})
//获取文章内容
router.get('/getArticle/:articlename',function(req,res,next){
  var ArticleTitle = req.params.articlename;
  api.findArticle({ArticleTitle:ArticleTitle}).then((data) => {
    res.json(data);
  })
})
// //获取文章分类
// router.get('/getCategies',function(req,res,next) {
//   api.findArticle({}).then((data) => {
//     var titleList = [];
//     data.forEach((element,index) => {
//       titleList[index] = element.ArticleCategory;
//     });
//     var sigTitleList = Array.from(new Set(titleList));
//     res.json(sigTitleList);
//   })
// })
module.exports = router;
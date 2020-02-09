<template>
<main>
  <el-container>
    <el-header>
      <h1>{{article.ArticleTitle}}</h1>
      <span>{{article.UserName}}-</span>
      <span>{{article.ArticleCategory}}</span>
    </el-header>
    <el-main v-html="article.ArticleContent">
    </el-main>
    <el-footer>{{article.ArticleTime}}</el-footer>
  </el-container>
</main>
</template>

<script>

import {getArticle} from '../server/article';

export default {
  name: 'Article',
  data () {
    return {
      article: ''
    }
  },
  created:function () {
    var articleTitle = this.$route.params.articleTitle;
    getArticle (articleTitle).then((res) => {
      this.article = res.data[0];
      this.article.ArticleTime = this.article.ArticleTime.substring(0,10);
    })
  },
  watch: {
    $route(to,from){
      var path = to.path;
      var site = path.lastIndexOf("\/");
      var articleTitle = path.substring(site+1,path.length);
      getArticle(articleTitle).then((res) => {
        this.article =res.data[0];
      })
    }
  }
}
</script>
<style scoped>
h1{
  font-size: 250%;
  margin: 0;
}
.el-footer{
  text-align: right;
}
main{
  text-align: left;
}
</style>
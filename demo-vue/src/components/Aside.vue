<template>
  <main>
    <div class="outer">
          <el-menu
          router
          default-active="2">
          <el-menu-item id="Home" index="/">Home(logout)</el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <h3>Demo</h3>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/todolist">todolist</el-menu-item>
              <el-menu-item index="/JSONP">JSONP</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <h3>Learing Notes</h3>
            </template>
            <el-menu-item id="upload" index="/articleupload">upload Notes</el-menu-item>
          <el-menu-item-group>
            <el-menu-item 
            @click="gotoAritcle(item)"
            :key="index"
            v-for="(item,index) in articleList"
            >{{item}}</el-menu-item>
          </el-menu-item-group>
          </el-submenu>
          </el-menu>
    </div>
  </main>
</template>
<script>
import {getArticleList} from '../server/article';
export default {
    name: 'Aside',
    data () {
      return {
        articleList: []
      }
    },
    beforeCreate: function () {
      getArticleList().then((res) => {
        this.articleList = res.data;
      })
    },
    methods: {
      gotoAritcle:function (article) {
        this.$router.push({name: 'article', params:{articleTitle:article}}).catch(err => {err});
      }
    }
}
</script>
<style scoped>
#tit {
  font-weight: bolder;
}
main {
  text-align: center;
}
#Home{
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.el-menu-item.is-active {
    color: black;
}
#upload {
  font-weight: bolder;
}
</style>
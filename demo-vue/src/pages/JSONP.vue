<template>
  <main>
    <input type="text" @keyup="query()" v-model="key">
    <ul>
      <li
      :key="index"
      v-for="(item,index) in list">{{item.q}}</li>
    </ul>
  </main>
</template>
<script>
export default {
  name:'JSONP',
  data () {
    return {
      list: [],
      key: ''
    }
  },
  methods: {
    query: function () {
      var that = this
      that.$http.jsonp("https://www.baidu.com/sugrec",{
        params: {
          prod: 'pc',
          wd: this.key
        }
      }).then(function(res){
        this.list = res.body.g;
      },function(error){
        alert(error.toString())
      })
    }
  }
}
</script>
<style scoped>
* {
  padding:0;
  margin: 0;
}
input{
  font-size: 100%;
  margin: auto;
  width:700px;
  height: 30px;
}
ul {
  list-style-type: none;
  width: 700px;
  margin:0 auto;
  border: 1px solid #e9e9e9;

}
li {
  text-align: left;
  text-indent: 10px;
  cursor: pointer;
  font-size:14px;
  line-height: 30px;
}
li:hover{
  background-color: #ccc;
}
</style>
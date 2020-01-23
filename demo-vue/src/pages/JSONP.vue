<template>
  <main>
    <h1>Baidu JSONP</h1>
    <input type="text" @keyup="query()" v-model="key" placeholder="请输入搜索内容...">
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
      that.$jsonp("https://www.baidu.com/sugrec",{
          prod: 'pc',
          wd: this.key
      }).then(json => {
        this.list = json.g;
      }).catch(err => {
        alert(err.toString());
      })
    }
  }
}
</script>
<style scoped>
h1{
  font-size:1cm;
}

input{
  font-size: 100%;
  margin: 10% auto 0;
  width:700px;
  height: 30px;
}
ul {
  list-style-type: none;
  width: 700px;
  margin:0 auto;
  border: 1px solid #e9e9e9;
  padding:0;
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
main {
  text-align: center;
}
</style>
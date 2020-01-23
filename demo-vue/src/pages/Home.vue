<template>
  <main>
      <div id="log">
        <h1>Been's Home</h1>
        <div id="log-inner">
          <router-link to="/todolist"><h4>Been's Demo</h4></router-link>
          <router-link to="/2-1"><h4>Been's Learning Note's</h4></router-link>
          <footer>
            <el-button type="text">Login</el-button>
          </footer>
          </div>   
      </div>
  </main>
</template>

<script>
export default {
    name:'Home',
    beforeCreate () {
      var background = document.body.style;
      background.backgroundImage='url(' + require('../assets/HBackgroud.jpg') + ')';
      background.backgroundRepeat = "no-repeat";
      background.backgroundSize = "cover";
      background.backgroundAttachment='fixed';
    },
    beforeDestroy () {
      document.body.removeAttribute('style');
    }

}
</script>
<style scoped>
main{
  color: white;
  font-size: 200%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 22%;
}
a{
  color: white;
  text-decoration: none;
}
h4{
  width: 400px;
  background-color: rgb(46, 45, 45,0.5);
  border-radius: 30%;
}
h1{
  width: 400px;
  background-color: rgb(0, 0, 0,0.5);
  font-size: 170%;
}
.el-button--text{
  color: white;
  font-size: 100%;
}
.el-button--text:hover{
  color: rgb(182, 176, 176);
}
h4:hover{
  color: rgb(182, 176, 176);
}
</style>
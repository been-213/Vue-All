<template>
  <main>
      <div id="log">
        <h1>Been's Home</h1>
        <div id="log-inner">
          <router-link to="/todolist"><h4>Been's Demo</h4></router-link>
          <router-link to="/2-1"><h4>Been's Learning Note's</h4></router-link>
          <footer>
            <el-button type="text" @click="dialogLoginVisible=true">Login</el-button>
          </footer>

          <el-dialog title="LOGIN" :visible.sync="dialogLoginVisible" width="30%">
          <el-form :model="form">
            <el-form-item label="Username" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password" :label-width="formLabelWidth">
              <el-input v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogLoginVisible = false">Cancel</el-button>
            <el-button type="primary" @click=login()>Login</el-button>
          </div>
        </el-dialog>

          </div>   
      </div>
  </main>
</template>

<script>
export default {
    name:'Home',
    data () {
      return {
        dialogLoginVisible:false,
        formLabelWidth: '120px',
         form: {
          Username:'',
          Password:''
        },
      }
    },
    methods: {
      login:function() {
        this.dialogLoginVisible = false;
        this.$http.get('/api/login').then((res) => {
          alert(res)
        })
      }
    },
    beforeCreate () {
      var background = document.body.style;
      background.backgroundImage='url(' + require('../assets/HBackground.jpg') + ')';
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
  padding-left: 10%;
  padding-top: 15%;
}
a{
  color: white;
  text-decoration: none;
}
h4{
  width: 400px;
  background-color: rgb(46, 45, 45,0.5);
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
.el-button--text:focus{
  color:rgb(182, 176, 176);
}
.el-button--text:hover{
  color: rgb(182, 176, 176);
}
.el-button--primary {
  background-color: rgb(0, 0, 0,0.5);
  border-color: rgb(0, 0, 0,0.5);
}
.el-button--primary:hover{
  background-color: rgb(182, 176, 176);
  border: black;
}
h4:hover{
  color: rgb(182, 176, 176);
}
footer{
  width: 400px;
  background-color:  rgb(0, 0, 0,0.5);
}
</style>
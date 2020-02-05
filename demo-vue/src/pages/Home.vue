<template>
  <main>
      <div id="log">
        <h1>Been's Home</h1>
        <div id="log-inner">
          <router-link to="/todolist"><h4>Been's Demo</h4></router-link>
          <router-link to="/2-1"><h4>Been's Learning Note's</h4></router-link>
          <footer v-if="!ifLogin">
            <el-button type="text" @click="dialogLoginVisible=true">Login</el-button>
            <el-button type="text" @click="dialogLogupVisible=true">Logup</el-button>
          </footer>

          <footer v-if="ifLogin">
            <el-button type="text" @click=logout()>Logout</el-button>
          </footer>

          <el-dialog title="LOGIN" :visible.sync="dialogLoginVisible" width="30%">
          <el-form :model="formLogin">
            <el-form-item label="Username" :label-width="formLabelWidth">
              <el-input v-model="formLogin.Username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password" :label-width="formLabelWidth">
              <el-input v-model="formLogin.Password" show-password=true autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogLoginVisible = false">Cancel</el-button>
            <el-button type="primary" @click=login()>Login</el-button>
          </div>
        </el-dialog>

        <el-dialog title="LOGUP" :visible.sync="dialogLogupVisible" width="30%">
          <el-form :model="formLogup">
            <el-form-item label="Username" :label-width="formLabelWidth">
              <el-input v-model="formLogup.Username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password" :label-width="formLabelWidth">
              <el-input v-model="formLogup.Password" show-password=true autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogLogupVisible = false">Cancel</el-button>
            <el-button type="primary" @click=logup()>Logup</el-button>
          </div>
        </el-dialog>

          </div>   
      </div>
  </main>
</template>

<script>
import {Login_,Logup_} from '../server/user.js';
export default {
    name:'Home',
    data () {
      return {
        dialogLoginVisible:false,
        dialogLogupVisible: false,
        formLabelWidth: '120px',
        ifLogin: Boolean,
         formLogin: {
          Username:'',
          Password:''
        },
        formLogup: {
          Username: '',
          Password: ''
        }
      }
    },
    methods: {
      logout: function(){
        this.ifLogin = false;
        localStorage.ifLogin = false;
      },
      login:function() {
        let that = this;
        Login_(that.formLogin).then((res) => {
          alert(res.data.message);
          if(res.data._dig === false){
            that.dialogLoginVisible = false;
            localStorage.ifLogin = true;
            that.$router.push('/todolist');
          }else{
            that.formLogin.Username = '';
            that.formLogin.Password = '';
          }
        })
      },
      logup: function(){
        let that = this;
        Logup_(that.formLogup).then((res) => {
          alert(res.data.message);
          if(res.data._dig === false){
            that.dialogLogupVisible = false;
            localStorage.ifLogin = true;
            that.$router.push('/todolist');
          }else{
            that.formLogup.Password = '';
          }
        });
      }
    },
    beforeCreate () {
      var background = document.body.style;
      background.backgroundImage='url(' + require('../assets/HBackground.jpg') + ')';
      background.backgroundRepeat = "no-repeat";
      background.backgroundSize = "cover";
      background.backgroundAttachment='fixed';
    },
    mounted () {
      this.ifLogin = localStorage.ifLogin === 'true' ? true:false;
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
  color:white;
}
.el-button--text:hover{
  color: rgb(182, 176, 176);
}
.el-button--primary {
  background-color: rgb(0, 0, 0,0.5);
  border-color: rgb(0, 0, 0,0.5);
}
.el-button--primary:focus {
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
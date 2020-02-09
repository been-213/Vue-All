<template>
  <main>
    <el-form :model="articleForm" label-position="left" :rules="rules" class="demo-ruleForm" :ref="articleForm"> 
      <el-form-item label="Titile" prop="Title">
        <el-input v-model="articleForm.Title"></el-input> 
      </el-form-item>
      <el-form-item label="Author" prop="Author">
        <el-input v-model="articleForm.Author"></el-input>
      </el-form-item>
      <el-form-item label="Category">
        <el-select v-model="articleForm.Category" placeholder="Select Category">
          <el-option 
          :key="item.value"
          v-for="item in Categories"
          :value="item.value"
          :label="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Content">
        <el-input v-model="articleForm.Content"></el-input>
      </el-form-item>
      <el-form-item class="footer">
        <el-button type="primary" @click="onSubmit(articleForm)">Submit</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>

  </main>
</template>
<script>
import {uploadArticle} from '../server/article';
export default {
  name:'articleupload',
  data () {
    return {
      articleForm:{
        Title:'',
        Author:'',
        Category:'',
        Time: '',
        Content:''
      },
      rules:{
        Title:[
          {required:true,message:'Title should not be null'},
          {max:16,message:'Title is too long'}
        ],
        Author: [
          {required:true,message:'Author should not be null'},
          {max:16,message:'Author is too long'}
        ]
      },
      Categories:[{
        value: "Notes",
        label: "Notes"
      },{
        value: "Blog",
        label: "Blog"
      }],
    }
  },
  methods:{
    onSubmit: function(formName) {
      this.$refs[formName].validate((valid) => {
          if (valid) {
            this.articleForm.Time = new Date();
            uploadArticle(this.articleForm).then((res) => {
              if(res.data._dig === true){
                this.openNotifySuccess()
              }else{
                this.openNotifyError()
              }
            })
          } else {
            this.openNotifyNo()
            return false;
          }
        });
    },
    openNotifySuccess() {
        this.$notify({
          title: 'Success',
          message: 'Submit Success',
          type:'success'
        });
      },
      openNotifyError() {
        this.$notify({
          title: 'Error',
          message: 'The Article title is exist',
          type: 'error'
        });
      },
      openNotifyNo() {
        this.$notify({
          title: 'Error',
          message: 'Error Submit',
          type: 'error'
        })
      }
  }
}
</script>
<style scoped>
main{
  text-align :left;
}
.footer {
  text-align: center;
}
</style>
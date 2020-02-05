<template>
<main>
    <h1>This is todo list with localStorage</h1><br>
    <input type="text" v-model="newItem" @keyup.enter="addNewTask" placeholder="Please enter the new task ...">
    <div class="form">
        <h4>TODOTASK</h4><span>{{Todolist.length}}</span>
        <ul class="TodoList">
            <li 
            :key="index"
            v-for="(item,index) in Todolist">{{item.task}}
                <span>
                    <el-button type="text" @click="finishedTask(index)">Finished</el-button>
                    <el-button type="text" @click="deleteTodoTask(index)">Delete</el-button>
                </span>
            </li>
        </ul>
        <h4>FINISHEDTASK</h4><span>{{FinishedList.length}}</span>
        <ul class="FinishedList">
            <li
            :key="index"
            v-for="(item,index) in FinishedList">{{item.task}}
            <span>
                <el-button type="text" @click="revokeTask(index)">Revoke</el-button>
                <el-button type="text" @click="deleteFinishedTask(index)">Delete</el-button>
            </span>
            </li>
        </ul>
    </div>
    <el-button @click="saveTask()">Save</el-button>
</main>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'Todolist',
    data () {
        return {
            newItem: '',
            Todolist: [],
            FinishedList: []
        }
    },
    created:function(){
            Axios.get('/api/todoTask/getTodoTask').then((res)=>{
                console.log(res.data);
                this.Todolist = res.data;
            }),
            Axios.get('/api/todoTask/getFinishedTask').then((res)=>{
                this.FinishedList = res.data;
            })
    },
    methods:{
        addNewTask: function() {
            this.Todolist.push({task:this.newItem});
            this.newItem = '';
        },
        finishedTask: function(index){
            var doneTask = this.Todolist.splice(index,1)[0];
            this.FinishedList.push(doneTask);
        },
        deleteTodoTask: function(index){
            this.Todolist.splice(index,1);
        },
        deleteFinishedTask: function(index){
            this.FinishedList.splice(index,1);

        },
        revokeTask:function(index){
            var revokedTask = this.FinishedList.splice(index,1)[0];
            this.Todolist.push(revokedTask);
        },
        saveTask: function(){
            Axios.post('/api/todoTask/uploadTodoTask',this.Todolist).then((res) => {
            console.log(res)
            }).catch((err)=>{
                alert(err);
            }),
            Axios.post('/api/todoTask/uploadFinishedTask',this.FinishedList).then((res) => {
            alert(JSON.stringify(res.data));
            }).catch((err)=>{
                alert(err);
            })
        }
    }
}
</script>
<style scoped>
ul{
    list-style-type: none;
}
input {
    width: 400px;
    height: 20px;
    font-size: 80%;
}
h4{
    display: inline;
}
h1 {
    font-size:1cm;
}
span{
    margin-left: 5%;
}
.form{
    padding: 5%;
}
main{
    font-size: 150%;
    text-align: center;
}
</style>
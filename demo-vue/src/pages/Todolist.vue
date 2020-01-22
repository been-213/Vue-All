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
</main>
</template>

<script>
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
                this.Todolist = JSON.parse(localStorage.TodoList);
                this.FinishedList = JSON.parse(localStorage.FinishedList);
    },
    updated:function(){
        localStorage.setItem('TodoList',JSON.stringify(this.Todolist));
        localStorage.setItem('FinishedList',JSON.stringify(this.FinishedList));
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
    font-size: 120%;
    text-align: center;
}
</style>
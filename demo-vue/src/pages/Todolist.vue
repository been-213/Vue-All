<template>
<main>
    <h3>This is todo list</h3><br>
    <input type="text" v-model="newItem" @keyup.enter="addNewTask" placeholder="Please enter the new task ...">
    <br>
    <span>TODOTASK</span>
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
    <span>FINISHEDTASK</span>
    <ul class="FinishedList">
        <li
        :key="index"
        v-for="(item,index) in FinishedList">{{item.task}}
        <span>
            <el-button type="text" @click="revokeTask(index)">Revoke</el-button>
            <el-button type="text" @click="deleteDoneTask(index)">Delete</el-button>
        </span>
        </li>
    </ul>
</main>
</template>

<script>
export default {
    name: 'Todolist',
    data () {
        return {
            newItem: '',
            Todolist: [{
                task: 'Todotask1'
            },{
                task: 'Todotask2'
            }],
            FinishedList: [{
                task: 'FinishedTask1'
            },{
                task: 'FinishedTask2'
            }]
        }
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
</style>
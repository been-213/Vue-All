var TodoTaskModel = require('../models/todotasks');
var FinishedTaskModel =require('../models/finishedtasks');
module.exports = {
  //获取todolist
  findTodo(data={},feilds=null,options={}) {
    return new Promise((resolve,reject) => {
      TodoTaskModel.find(data,feilds,options,(error, doc) => {
        if(error){
          reject(error)
        } else {
          resolve(doc)
        }
      })
    })
  },
  //获取finishedList
  findFinished(data={},feilds=null,options={}) {
    return new Promise((resolve, reject) => {
      FinishedTaskModel.find(data,feilds,options,(error,doc) => {
        if(error){
          reject(error)
        }else{
          resolve(doc)
        }
      })
    })
  },
  //保存todolist
  saveTodoTask(aTask) {
      return new Promise((resolve,reject) => {
        TodoTaskModel.remove({},(error,doc) => {
          if(error){
            reject(error);
          }else{
            resolve('delete TodoTask success');
          }
        })
        aTask.forEach(element => {
          TodoTaskModel.create({task:element.task},(error,doc) => {
            if(error){
              reject(error);
            }else{
              resolve('save TodoTask success')
            }
          })
        })
    })
  },
  //保存Finishedlist
  saveFinishedTask(aTask){
    return new Promise((resolve,reject) => {
      FinishedTaskModel.remove({},(error,doc) => {
        if(error){
          reject(error);
        }else{
          resolve('delete Finished success');
        }
      })
      aTask.forEach(element => {
        FinishedTaskModel.create({task:element.task},(error,doc) => {
          if(error){
            reject(error);
          }else{
            resolve('Save Finished success')
          }
        })
      })
  })
  }
}
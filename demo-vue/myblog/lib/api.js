var TodoTaskModel = require('../models/todotasks');
var FinishedTaskModel =require('../models/finishedtasks');
var UserModel = require('../models/users');
var ArticleModel = require('../models/blogs');
module.exports = {
  //User
  Save(data){
    return new Promise((resolve,reject) => {
      UserModel.create(data,(error,doc) => {
        if(error){
          reject(error)
        }else{
          resolve(doc)
        }
      })
    })
  },
  find(data={},feilds=null,options={}) {
    return new Promise((resolve,reject)=> {
      UserModel.find(data,feilds,options,(error,doc)=> {
        if(error){
          reject(error)
        }else{
          resolve(doc)
        }
      })
    })
  },
  findOne(data){
    return new Promise((resolve,reject) => {
      UserModel.findOne(data,(error,doc)=>{
        if(error){
          reject(error)
        }else{
          resolve(doc)
        }
      })
    })
  },
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
  },
  //Artical
  saveArtical(data){
    return new Promise((resolve,reject) => {
      ArticleModel.create(data,(error,doc) => {
        if(error){
          reject(error)
        }else{
          resolve(doc)
        }
      })
    })
  },
  findArticle(data={},feilds=null,options={}){
    return new Promise((resolve,reject) => {
      ArticleModel.find(data,feilds,options,(error,doc) => {
        if(error){
          reject(error)
        }else{
          resolve(doc)
        }
      })
    })
  },
  findOneArticle(data){
    return new Promise((resolve,reject) => {
      ArticleModel.findOne(data,(error,doc) => {
        if(error){
          reject(error)
        }else{
          resolve(doc)
        }
      })
    })
  },
  remove(data){
    return new Promise((resolve,reject) => {
      ArticleModel.remove(data,(error,doc) =>{
        if(error){
          reject(error)
        }else{
          resolve(doc)
        }
      })
    })
  }
}
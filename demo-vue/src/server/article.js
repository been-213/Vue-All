import Axios from 'axios';

export const getArticleList = function () {
  return new Promise((resolve,reject) => {
    Axios.get('/api/article/getArticleList').then((res,err) => {
      if(err){
        reject(err);
      }else{
        resolve(res);
      }
    })
  })
}

export const uploadArticle = function (newAticle) {
  return new Promise((resolve,reject) => {
    Axios.post('/api/article/uploadArticle',newAticle).then((res,err) => {
      if(err){
        reject(err)
      }else{
        resolve(res)
      }
    })
  })
}

export const getArticle = function (articleTitle) {
  return new Promise((resolve,reject) => {
    Axios.get('/api/article/getArticle/' + articleTitle).then((res,err) => {
      if(err){
        reject(err)
      }else{
        resolve(res)
      }
    })
  })
}

// export const getCategories = function () {
//   return new Promise((resolve,reject) => {
//     Axios.get('/api/article/getCategies').then((res,err) => {
//       if(err){
//         reject(err)
//       }else{
//         resolve(res)
//       }
//     })
//   })
// }

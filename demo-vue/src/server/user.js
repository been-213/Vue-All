import Axios from "axios";

export const Login_ = function(Data) {
  return new Promise((resolve,reject) => {
    Axios.post('/api/users/login',Data).then((res,error) => {
      if(error){
        reject(error)
      }else{
        resolve(res)
      }
    })
  })
}

export const Logup_ = function(Data) {
  return new Promise ((resolve,reject) => {
    Axios.post('/api/users/logup',Data).then((res,error) => {
      if(error){
        reject(error)
      }else{
        resolve(res)
      }
    })
  })
}

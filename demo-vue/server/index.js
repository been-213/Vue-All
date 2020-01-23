const path = require('path');
const express = require('express');
const app = express();

app.get('/api/login',(req,res,next) => {
  res.json({
    data: 'get success'
  })
})

//监听端口
app.listen(3000);
console.log('listening at port:3000......');
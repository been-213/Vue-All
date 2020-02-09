var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var api = require('../lib/api');

var jsonParser = bodyParser.json();
/* GET home page. */
router.get('/getToDoTask',(req,res,next) => {
  api.findTodo({}).then((data) => {res.json(data)});
})

router.get('/getFinishedTask',(req,res,next) => {
  api.findFinished({}).then((data) => {res.json(data)});
})

router.post('/uploadTodoTask',(req,res,next) => {
  api.saveTodoTask(req.body).then((data) => {
    res.json(data);
  })
})

router.post('/uploadFinishedTask',(req,res,next) => {
  api.saveFinishedTask(req.body).then((data) => {
    res.json(data)
  })
})

module.exports = router;

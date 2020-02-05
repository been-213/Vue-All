var express = require('express');
var api = require('../lib/api');
var router = express.Router();

/* GET users listing. */
router.post('/logup', function(req, res, next) {
  var newUser = {
    Username: req.body.Username,
    Password: req.body.Password
  };
  api.find({Username:newUser.Username}).then((data) => {
    if(data.length === 0){
      api.Save(newUser).then((data) => {
        res.json({message:'Logup Success',_dig:false});
      })
    }else{
      res.json({message:'User is exist',_dig:true});
    }
  })
});

router.post('/login', function(req,res,next) {
  var User = {
    Username: req.body.Username,
    Password: req.body.Password
  };
  api.findOne(User).then((data) => {
    if(data === null){
      res.json({message:'Username or Password is Wrong',_dig:true})
    }else{
      res.json({message:'Login Success', _dig:false})
    }
  })
})

module.exports = router;

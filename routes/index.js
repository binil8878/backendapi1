var express = require('express');
var con=require('../config/config')
var router = express.Router();

/* GET home page. */
router.get('/getList', function(req, res, next) {
  var sql= 'select * from student'
  con.query(sql,(err,result)=>{
    if(err){
      console.log(err)
    }else{
      console.log(result)
      res.json(result)
    }
  })

});

module.exports = router;

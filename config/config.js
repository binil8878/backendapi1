var mysql=require('mysql')
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"abc"
});
con.connect(function(err){
    if(err){
        console.log(err)
        
    }else{
        console.log("connected")
    }
})
module.exports =con;
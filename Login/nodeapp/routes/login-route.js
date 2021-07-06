var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */

router.get('/login', function(req, res, next) {
  res.render('login-form');
});

router.post('/login', function(req, res){
    var id = req.body.id;
    var password = req.body.password;

    var sql='SELECT * FROM student WHERE student_id =? AND password =?';
    db.query(sql, [id, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.id= id;
            req.session.cookie.expires = new Date(Date.now() + 100000000)
            res.redirect('/dashboard');
        }else{
            res.render('login-form',{alertMsg:"Your ID or Password is Incorrect"});
        }
    })

})

module.exports = router;
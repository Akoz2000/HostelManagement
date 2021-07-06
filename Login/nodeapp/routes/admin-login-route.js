var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */

router.get('/adminlogin', function(req, res, next) {
  res.render('admin');
});

router.post('/adminlogin', function(req, res){
    var id = req.body.id;
    var password = req.body.password;

    var sql='SELECT * FROM admin WHERE id =? AND password =?';
    db.query(sql, [id, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.id= id;
            res.redirect('/dashboardadmin');
        }else{
            res.render('admin',{alertMsg:"Your ID or Password is Incorrect"});
        }
    })

})

module.exports = router;
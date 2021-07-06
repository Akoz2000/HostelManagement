var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/form', function(req, res, next) { 
res.render('alloc-form'); 
});
router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
  var id = req.body.id;
 
  // insert user data into users table
  var sql = 'SELECT * from student WHERE student_id=?';
  db.query(sql,id,function (err, data) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
         res.render('alloc', { title: 'User List', userData: data});
  });
    // redirect to user form page after inserting the data
}); 
module.exports = router;
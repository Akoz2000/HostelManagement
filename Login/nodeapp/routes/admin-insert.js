var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/form', function(req, res, next) { 
res.render('admin-insert'); 
});
router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
  var student_id = req.body.student_id;
  var fullname = req.body.full_name;
 
  // insert user data into users table
  var sql = 'UPDATE student SET ? where student_id=? and full_name=?;';
  db.query(sql, [userDetails,student_id,fullname],function (err, data) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
  });
 res.redirect('/admin-insert/form');  // redirect to user form page after inserting the data
}); 
module.exports = router;
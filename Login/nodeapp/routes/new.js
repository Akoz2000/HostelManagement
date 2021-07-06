var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/form', function(req, res, next) { 
res.render('new'); 
});
router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
  var student_id = req.body.student_id;
  var fullname = req.body.full_name;
  var room = req.body.room_no;
  var hostel = req.body.hostel_id;
  var no = req.body.no;
  var branch = req.body.branch;
  var year = req.body.year;
  var pass = req.body.pass;
 
  // insert user data into users table
  var sql = 'INSERT into student (student_id,full_name,room_no,hostel_id,mobile_no,year_of_study,branch,password) VALUES (?,?,?,?,?,?,?,?)';
  db.query(sql, [student_id,fullname,room,hostel,no,year,branch,pass],function (err, data) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
  });
 res.redirect('/new/form');  // redirect to user form page after inserting the data
}); 
module.exports = router;
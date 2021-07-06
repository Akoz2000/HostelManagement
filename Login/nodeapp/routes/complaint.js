var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/form', function(req, res, next) { 
res.render('complaint'); 
});
router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
  const id=req.body.student_id;
  const name=req.body.name;
  const complaint=req.body.complaint_info;
 
  // insert user data into users table
  var sql = 'INSERT into complaint (student_id,name,complaint_info) VALUES (?,?,?)';
  db.query(sql, [id,name,complaint],function (err, data) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
  });
 res.redirect('/complaint/form');  // redirect to user form page after inserting the data
}); 
module.exports = router;
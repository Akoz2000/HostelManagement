var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/warden', function(req, res, next) {
    var sql='SELECT * FROM admin';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('warden', { title: 'warden', userData: data});
  });
});
module.exports = router;
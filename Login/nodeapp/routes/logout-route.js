var express = require('express');
var db=require('../database');

var router = express.Router();
/* GET users listing. */
router.get('/logout', function(req, res) {
  req.session.destroy();
  res.redirect('/login');
});
module.exports = router;
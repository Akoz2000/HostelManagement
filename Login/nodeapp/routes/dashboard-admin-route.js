var express = require('express');
var router = express.Router();
/* GET users listing. */

router.get('/dashboardadmin', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('dashboard-admin',)
    }else{
        res.redirect('/login');
    }
});


module.exports = router;
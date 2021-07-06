


const express = require('express');


const app = express();


var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '101010',      // Replace with your database password
  database: 'test' // // Replace with your database Name
}); 

conn.connect();


app.engine('pug', require('pug').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get("/data",function (req,res){
    conn.query("SELECT * FROM login", function(err,rows, fields){
        if(err)throw err;

        res.render('users',{
            title: 'User Details',
            items: rows

        })
        
    })
});




app.listen(8080,()=> console.log("app is running"));


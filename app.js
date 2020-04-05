const express = require('express');
const path = require('path');
const pug = require('pug');
const app = new express();
const port = process.argv[2];
const bodyParser = require('body-parser');

app.use(express.static(process.argv[3] || 'public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');
app.get('/home',function(req,res){
    res.render(process.argd||'index', {date: new Date().toDateString()})
});
app.post('/form', function(req,res){
    //str is passed by the form
    res.send(req.body.str.split('').reverse().join(''));
    
    //req.body.str
})
app.listen(port); 
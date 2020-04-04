const express = require('express');
const path = require('path');
const pug = require('pug');
const app = new express();
const port = process.argv[2];
app.use(express.static(process.argv[3] || 'public'));
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')
app.get('/home',function(req,res){
    res.render(process.argd||'index', {date: new Date().toDateString()})
});
app.listen(port); 
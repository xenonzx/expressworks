const express = require('express');
const pug = require('pug');
const app = new express();
const port = process.argv[2];
app.use(express.static(process.argv[3] || 'public'));
app.set('view engine', 'pug')
app.get('/home',function(req,res){
    res.render(process.argv[3]||'index', {date: new Date().toDateString()})
});
app.listen(port); 
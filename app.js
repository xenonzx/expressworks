const express = require('express');
const pug
const app = new express();
const port = process.argv[2];
app.use(express.static(process.argv[3] || 'public'));
app.get('/home',function(req,res){
    res.send('Hello World!');
});
app.listen(port); 
const express = require('express');
const path = require('path');
const pug = require('pug');
const crypto = require('crypto');
const fs = require('fs');
const app = new express();
const port = process.argv[2];
const filePath = process.argv[3];
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

app.put('/message/:ID', function(req, res){
    const id = req.params.ID;
    res.send(crypto.createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex'));
});

app.post('/form', function(req,res){
    //str is passed by the form
    res.send(req.body.str.split('').reverse().join(''));
});

app.get('/books', function(req, res){
    fs.readFile(filePath, function(err, data){
        if(err){
            console.log(err);
        }

        if (data){
            try {
                books = JSON.parse(data.toString());
            res.json( JSON.parse(data.toString()));
        }
    })
});
app.listen(port); 
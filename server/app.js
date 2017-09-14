const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors');
    
require('dotenv').config()

mongoose.connect('mongodb://localhost/hacktivpressvega', err => {
  if(err) throw err
  console.log('Connect DB hacktivpressvega');
})
    
const auth = require('./routes/auth');
const articles = require('./routes/articles')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use('/', auth);
app.use('/articles', articles)

app.listen(process.env.PORT || 3000);

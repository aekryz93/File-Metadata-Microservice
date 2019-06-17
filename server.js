'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var ctrl = require('./controller.js')
// require and use "multer"...
var upload = multer({ dest: 'uploads/' })
var app = express();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/fileanalyse', upload.single('upfile'), ctrl.uploadFile)

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

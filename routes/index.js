var express = require('express');
var router = express.Router();
var base62 = require('base62');
var app = require('../app.js');
/*
Required routes:
/new/[URL] - creates a shortened URL
/[Shortened URL] - goes to shortened URL

*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(app);
});

module.exports = router;

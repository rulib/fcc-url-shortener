var express = require('express');
var router = express.Router();
var base62 = require('base62');
var initApp = require('../my_node_modules/initApp.js');
var url = require('url');



/*
Required routes:
/new/[URL] - creates a shortened URL
/[Shortened URL] - goes to shortened URL

*/


//this can't handle the slashes in http://
router.get('/new/http:/:longUrl', function (req, res, next){
  console.log(url.parse(req.params.longUrl));
  
  
  
  
  
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: initApp.counterID });
  console.log(initApp.counterID);
});

module.exports = router;

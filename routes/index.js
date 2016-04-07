var express = require('express');
var router = express.Router();
var url = require('url');
var mongo = require('mongodb').MongoClient;
var shortid = require('shortid');
var shorten = require('../my_node_modules/shorten.js');


/*
Required routes:
/new/[URL] - creates a shortened URL
/[Shortened URL] - goes to shortened URL

*/



router.get('/new/*'
  ,shorten.validCheck
  ,shorten.dupeCheck
  ,shorten.newEntry
  ,shorten.renderOutput
  ,function(req,res,next){
    console.log("Logging req.dupe: "+req.dupe)
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'foo' });
});

module.exports = router;


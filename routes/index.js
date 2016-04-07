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

/* Create new shortened URL or recover duplicate */

router.get('/new/*'
  ,shorten.validCheck
  ,shorten.dupeCheck
  ,shorten.newEntry
  ,shorten.renderOutput
  );



/* redirect to 9-character shortened URL */

router.get(/^[\/][\w-]{9}$/
  ,shorten.redirect
  ,function (req, res, next){res.redirect(req.stored);}
);

/* GET home page - catches all other ones too */
router.get('/*', function(req, res, next) {
  res.render('landing');
});


module.exports = router;


var express = require('express');
const fs = require('fs');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let imagePath = '/images/monochrome1.jpg'
  res.render('index', { 
    title: 'Express',
    imagePath:imagePath
  });
});

module.exports = router;

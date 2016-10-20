var express = require('express');
var router = express.Router();
var rakuten = require('../rakuten.js')();

var app_id = process.env.RAKUTEN_APP_ID || '';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/searchItem', function(req, res, next) {
  res.render('searchItem', {
    searchResult: [],
    searchTerm: ''
  });
});

router.post('/searchItem', function(req, res, next) {
  var searchTerm = req.param('searchTerm');
  var params = [
    {key: 'applicationId', value: app_id},
    {key: 'keyword', value: searchTerm},
    {key: 'sort', value: '-itemPrice'},
    {key: 'format', value: 'JSON'},
    {key: 'formatVersion', value: 2}
  ];

  rakuten.searchItem(params, function(err, result) {
    if (!err) {
      res.render('searchItem', {
        searchTerm: searchTerm,
        searchResult: result
      });
    }
  })
});

router.get('/searchProduct', function(req, res, next) {
  res.render('searchProduct', {
    searchResult: [],
    searchTerm: ''
  });
});

router.post('/searchProduct', function(req, res, next) {
  var searchTerm = req.param('searchTerm');
  var params = [
    {key: 'applicationId', value: app_id},
    {key: 'keyword', value: searchTerm},
    {key: 'format', value: 'JSON'},
    {key: 'formatVersion', value: 2}
  ];

  rakuten.searchProduct(params, function(err, result) {
    if (!err) {
      res.render('searchProduct', {
        searchTerm: searchTerm,
        searchResult: result
      });
    }
  })
});

module.exports = router;

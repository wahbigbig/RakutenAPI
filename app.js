var rakuten = require('./rakuten.js')();

var app_id = '1094588636500249896';


var params = [
  {key: 'applicationId', value: app_id},
  {key: 'keyword', value: 'rolex'},
  {key: 'sort', value: '+itemPrice'},
  {key: 'format', value: 'JSON'},
  {key: 'formatVersion', value: 2}
];

var params = [
  {key: 'applicationId', value: app_id},
  {key: 'keyword', value: 'rolex'},
  {key: 'format', value: 'JSON'},
  {key: 'formatVersion', value: 2}
];

rakuten.searchItem(params, function(err, res) {
  if (!err) {
    res.map(function(item) {
      console.log(item['itemName']);
      console.log(item['itemUrl']);
      console.log("------------------");
    })
  }
});


//console.log(rakuten);

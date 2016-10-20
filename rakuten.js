var request = require('superagent');

module.exports = function() {

  function searchItem(options, callback) {
    var endpoint = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222';

    var query = options.map(function(obj) {
      return obj.key + "=" + encodeURIComponent(obj.value);
    }).join('&');

    var url = endpoint + '?' + query;

    console.log(url);

    request.get(url)
      .end(function(err, res) {
        if (!err) {
          if (res.statusCode == 200) {
            body = JSON.parse(res.text);
            items = body['Items'];
            callback(false, items);
          } else {
            callback(true, res.text)
          }
        } else {
          callback(true, err);
        }
    });
  }

  function searchProduct(options, callback) {
    var endpoint = 'https://app.rakuten.co.jp/services/api/Product/Search/20140305'

    var query = options.map(function(obj) {
      return obj.key + "=" + encodeURIComponent(obj.value);
    }).join('&');

    var url = endpoint + '?' + query;

    console.log(url);

    request.get(url)
      .end(function(err, res) {
        //console.log(res);
        if (!err) {
          if (res.statusCode == 200) {
            body = JSON.parse(res.text);
            products = body['Products'];
            callback(false, products);
          } else {
            callback(true, res.text)
          }
        } else {
          callback(true, err);
        }
    });
  };

  function test(options, callback) {

  }

  return {
    searchItem: searchItem,
    searchProduct: searchProduct,
    test: test
  }
}

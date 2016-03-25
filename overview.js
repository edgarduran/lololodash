var _= require("lodash");

var salesByArticle = function(articles) {
  var result = [];
  var group = _.groupBy(articles, 'article');

  _.forEach(group, function(articles, name) {
    var total = _.reduce(articles, function(sum, article) {
      return sum + article.quantity;}, 0);
    result.push({ article: parseInt(name), total_orders: total });
  });

  return _.sortBy(result, 'total_orders').reverse();
};

module.exports = salesByArticle;

var _ = require("lodash");

var words = ['Test', 'Hello', 'World', 'Node', 'JavaScript'];

var modify = function (words) {
  return  _.chain(words)
    .sortBy()
    .map(function(word) {
      return word.toUpperCase() + 'CHAINED';
    });
};

module.exports =modify;

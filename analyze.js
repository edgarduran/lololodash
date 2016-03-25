var _ = require("lodash");

var worker = function(freelancers) {
  var total = _.reduce(freelancers, function(sum, freelancer) {
    return sum + freelancer.income;
  },0);

  var avg = total / freelancers.length;

  var underperform = freelancers.filter(function(person) {
    return person.income <= avg;
  });

  var overperform = freelancers.filter(function(person) {
    return person.income > avg;
  });

  var sortedUnder = _.sortBy(underperform, 'income');
  var sortedOver = _.sortBy(overperform, 'income');

  return {
    average: avg,
    underperform: sortedUnder,
    overperform: sortedOver
  }
};


module.exports = worker;

var _ = require("lodash");

var itemsSold =     [
     { article: 41,   quantity: 24 },
     { article: 2323, quantity: 2  },
     { article: 655,  quantity: 23 }
   ];

var sort = function (itemsSold) {
    return _.sortBy(itemsSold, 'quantity').reverse();
};

module.exports = sort;

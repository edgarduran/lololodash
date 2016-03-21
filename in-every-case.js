var _ = require("lodash");

var cities = {
    Hamburg:    { population: 1.698 },
    Strasbourg: { population: 0.272 },
    Rome:       { population: 2.753 },
    Dublin:     { population: 0.528 }
};

var addSize = function (cities) {
  return _.forEach(cities, function (city) {
    if (city.population > 1) {
      return city.size = "big";
    } else if  (city.population < .5) {
      return city.size = "small";
    } else {
      return city.size = "med";
    }
  });
};

module.exports =addSize;

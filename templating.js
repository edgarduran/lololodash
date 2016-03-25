var _ = require("lodash");

var worker = function(data) {
  var name = data.name
  var logins = _.size(data.login)

  return _.template('Hello <%= name %> (logins: <%= times %>)')({ name: name, times: logins })
};


module.exports = worker;

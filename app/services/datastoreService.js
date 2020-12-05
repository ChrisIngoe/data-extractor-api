'use strict';

const mongo = require('../middleware/mongo'),
  config = require('config');

exports.getAll = function (callback) {
  mongo.find(config.get('mongo.collection'), {})
  .then(function (response) {
    return callback(null, response);
  })
  .catch(function (error) {
    return callback(error);
  })
};

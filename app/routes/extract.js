'use strict';

const datastoreService = require('../services/datastoreService'),
  xml2js = require('xml2js');

exports.getAllJson = function (req, res) {
  datastoreService.getAll(function(err, data){
    if (err){
      return res.status(500).send('Internal server error');
    } else {
      return res.status(200).json( data );
    }   
  });
};

exports.getAllXml = function (req, res) {
  datastoreService.getAll(function(err, data){
    if (err){
      return res.status(500).send('Internal server error');
    } else {
      data.forEach(function(v){ delete v._id });
      const builder = new xml2js.Builder();
      const result = builder.buildObject(data);
      res.type('application/xml');
      return res.status(200).send(result);
    }   
  });
};

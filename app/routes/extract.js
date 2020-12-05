'use strict';

const datastoreService = require('../services/datastoreService');

exports.getAllJson = function (req, res) {
  datastoreService.getAll(function(err, data){
    if (err){
      return res.status(500).send('Internal server error');
    } else {
      return res.status(200).json( data );
    }   
  });
};

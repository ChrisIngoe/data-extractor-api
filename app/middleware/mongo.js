'use strict';

const MongoClient = require( 'mongodb' ).MongoClient,
  config = require('config');

const url = config.get('mongo.url');
let db;

module.exports = {
  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true, useUnifiedTopology: true }, function( err, client ) {
      if (err) return callback(err);
      db = client.db(config.get('mongo.db'));
      return callback( err );
    } );
  },

  getDb: function() {
    return db;
  },

  getCollection: function(collection) {
    return db.collection(collection);
  },

  find: function(collection, query, fields) {
    return new Promise(function(resolve, reject) {
      db.collection(collection)
        .find(query, {
          projection: fields || {}
        }).limit(100)
        .toArray(function(err, items) {
          if (err) {
            console.log(err)
            return reject(err);
          } else {
            console.log(items)
            return resolve(items);
          }
        });
      });
    }
};
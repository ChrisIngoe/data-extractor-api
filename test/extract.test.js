'use strict';

var app = require('../app'),
  request = require('supertest'),
  expect = require('chai').expect,
  sinon = require('sinon'),
  mongo = require('../app/middleware/mongo');

describe('Extract API endpoint Component Tests', function () {
  let mongoStub;
  beforeEach(function() {
    mongoStub = sinon.stub(mongo, "find").resolves([{},{}]);
  });
  afterEach(function() {
    mongoStub.restore();
  });
  describe('#GET / extract/json', function () {
    const data = {country: 'France'};
    it('should get OK response and an array of data', function(done) {
      request(app)
        .get('/extract/json')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.exist;
          expect(res.body).to.be.an('array');
          expect(res.body.length).equals(2);
          done();
        });
    });
  });
});

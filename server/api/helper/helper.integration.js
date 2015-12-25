'use strict';

var app = require('../..');
var request = require('supertest');

var newHelper;

describe('Helper API:', function() {

  describe('GET /api/helpers', function() {
    var helpers;

    beforeEach(function(done) {
      request(app)
        .get('/api/helpers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          helpers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      helpers.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/helpers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/helpers')
        .send({
          name: 'New Helper',
          info: 'This is the brand new helper!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newHelper = res.body;
          done();
        });
    });

    it('should respond with the newly created helper', function() {
      newHelper.name.should.equal('New Helper');
      newHelper.info.should.equal('This is the brand new helper!!!');
    });

  });

  describe('GET /api/helpers/:id', function() {
    var helper;

    beforeEach(function(done) {
      request(app)
        .get('/api/helpers/' + newHelper._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          helper = res.body;
          done();
        });
    });

    afterEach(function() {
      helper = {};
    });

    it('should respond with the requested helper', function() {
      helper.name.should.equal('New Helper');
      helper.info.should.equal('This is the brand new helper!!!');
    });

  });

  describe('PUT /api/helpers/:id', function() {
    var updatedHelper

    beforeEach(function(done) {
      request(app)
        .put('/api/helpers/' + newHelper._id)
        .send({
          name: 'Updated Helper',
          info: 'This is the updated helper!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedHelper = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedHelper = {};
    });

    it('should respond with the updated helper', function() {
      updatedHelper.name.should.equal('Updated Helper');
      updatedHelper.info.should.equal('This is the updated helper!!!');
    });

  });

  describe('DELETE /api/helpers/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/helpers/' + newHelper._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when helper does not exist', function(done) {
      request(app)
        .delete('/api/helpers/' + newHelper._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});

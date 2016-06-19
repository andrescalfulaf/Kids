'use strict';

var app = require('../..');
import request from 'supertest';

var newChild;

describe('Child API:', function() {

  describe('GET /api/childs', function() {
    var childs;

    beforeEach(function(done) {
      request(app)
        .get('/api/childs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          childs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      childs.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/childs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/childs')
        .send({
          name: 'New child',
          info: 'This is the brand new child!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newChild = res.body;
          done();
        });
    });

    it('should respond with the newly created child', function() {
      newChild.name.should.equal('New child');
      newChild.info.should.equal('This is the brand new child!!!');
    });

  });

  describe('GET /api/childs/:id', function() {
    var child;

    beforeEach(function(done) {
      request(app)
        .get('/api/childs/' + newChild._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          child = res.body;
          done();
        });
    });

    afterEach(function() {
      child = {};
    });

    it('should respond with the requested child', function() {
      child.name.should.equal('New child');
      child.info.should.equal('This is the brand new child!!!');
    });

  });

  describe('PUT /api/childs/:id', function() {
    var updatedChild;

    beforeEach(function(done) {
      request(app)
        .put('/api/childs/' + newChild._id)
        .send({
          name: 'Updated child',
          info: 'This is the updated child!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedChild = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedChild = {};
    });

    it('should respond with the updated child', function() {
      updatedChild.name.should.equal('Updated child');
      updatedChild.info.should.equal('This is the updated child!!!');
    });

  });

  describe('DELETE /api/childs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/childs/' + newChild._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when child does not exist', function(done) {
      request(app)
        .delete('/api/childs/' + newChild._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});

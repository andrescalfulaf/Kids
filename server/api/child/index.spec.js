'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var childCtrlStub = {
  index: 'childCtrl.index',
  show: 'childCtrl.show',
  create: 'childCtrl.create',
  update: 'childCtrl.update',
  destroy: 'childCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var thingIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './child.controller': childCtrlStub
});

describe('child API Router:', function() {

  it('should return an express router instance', function() {
    childIndex.should.equal(routerStub);
  });

  describe('GET /api/childs', function() {

    it('should route to child.controller.index', function() {
      routerStub.get
        .withArgs('/', 'childCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/childs/:id', function() {

    it('should route to child.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'childCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/childs', function() {

    it('should route to child.controller.create', function() {
      routerStub.post
        .withArgs('/', 'childCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/childs/:id', function() {

    it('should route to child.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'childCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/childs/:id', function() {

    it('should route to child.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'childCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/childs/:id', function() {

    it('should route to child.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'thingCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});

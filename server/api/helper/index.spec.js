'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var helperCtrlStub = {
  index: 'helperCtrl.index',
  show: 'helperCtrl.show',
  create: 'helperCtrl.create',
  update: 'helperCtrl.update',
  destroy: 'helperCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var helperIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './helper.controller': helperCtrlStub
});

describe('Helper API Router:', function() {

  it('should return an express router instance', function() {
    helperIndex.should.equal(routerStub);
  });

  describe('GET /api/helpers', function() {

    it('should route to helper.controller.index', function() {
      routerStub.get
        .withArgs('/', 'helperCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/helpers/:id', function() {

    it('should route to helper.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'helperCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/helpers', function() {

    it('should route to helper.controller.create', function() {
      routerStub.post
        .withArgs('/', 'helperCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/helpers/:id', function() {

    it('should route to helper.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'helperCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/helpers/:id', function() {

    it('should route to helper.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'helperCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/helpers/:id', function() {

    it('should route to helper.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'helperCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});

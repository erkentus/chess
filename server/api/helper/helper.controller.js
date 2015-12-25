/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/helpers              ->  index
 * POST    /api/helpers              ->  create
 * GET     /api/helpers/:id          ->  show
 * PUT     /api/helpers/:id          ->  update
 * DELETE  /api/helpers/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import chess from '../../components/chess'

exports.getInitialChessPosition = function(req, res){
    chess.getInitPosition().then(function(position){
      responseWithResult(res, 200)(position);
    }).catch(function(err){
      handleError(res)(err);
    });
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function(updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}


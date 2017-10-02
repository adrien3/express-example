'use strict';

var app      = require('../../app');
var Bluebird = require('bluebird');
var expect   = require('expect.js');
var request  = require('supertest');

describe('WS user', function () {
  before(function () {
      return require('../../models').sequelize.sync();
  });
 
  it('getUsers()', function (done) {
    request(app).get('/users').expect(200, done);
  });

  it('getUsers() with param', function (done) {
    request(app).get('/users?role=supervisor').expect(200, done);
  });

  it('getUser(user_id) user 1', function (done) {
    request(app).get('/users/1').expect(200, done);
  });

});

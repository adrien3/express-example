'use strict';

var app      = require('../../app');
var Bluebird = require('bluebird');
var expect   = require('expect.js');
var request  = require('supertest');

describe('WS Shift', function () {
  before(function () {
      return require('../../models').sequelize.sync();
  });
 
  it('getShift()', function (done) {
    request(app).get('/shifts').expect(200, done);
  });

});

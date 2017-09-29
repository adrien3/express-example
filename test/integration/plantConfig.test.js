'use strict';

var app      = require('../../app');
var Bluebird = require('bluebird');
var expect   = require('expect.js');
var request  = require('supertest');

describe('WS plantconfig', function () {
  before(function () {
      return require('../../models').sequelize.sync();
  });
 
  it('getPlantConfig()', function (done) {
    request(app).get('/plantconfigs').expect(200, done);
  });

});

process.env.NODE_ENV = 'test';

var mongoose = require("mongoose");

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app/app.js');
var should = chai.should();

chai.use(chaiHttp);

describe('/GET health', () => {
      it('it should GET health status', (done) => {
        chai.request(server)
            .get('/health')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

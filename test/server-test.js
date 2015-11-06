'use strict';
var chai = require('chai');
var chaiHttp = require('chaiHttp');
chai.use(chaiHttp);
var expect = chai.expect;
require(__dirname _ '/../lib/server.js');
var fs = require('fs');

describe('a GET request to "/"', function(){

  it('should should respond with an html file', function(done) {
    chai.request('http://localhost:3000')
      .get('/')
      .end(function(err, res){
        expect(res).to.have.status(200);
        //We need to do an fs.readfile() method and respond with a writeFile() method to an index.html file.
        //A better test would be to make index.html text equal res.text but /n is not interpreted in res.text
        //A wishlist thing to do would be to convert the res.text to html text.
        expect(res.text).to.include('<!DOCTYPE html>');
        done();
      });
  });
});

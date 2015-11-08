var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var server = require(__dirname + '/../examples/example-server.js');

describe('stc server', function() {

  it('should be able to respond to a get request', function(done) {
    chai.request('localhost:3000')
      .get('/finecupofcoffee')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('wow, so awesome, such framework');
        done();
      });
  });

  it('should respond to a post request', function(done) {
    chai.request('localhost:3000')
      .post('/finecupofjoe')
      .send({"trucker": "coffee"})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('{"trucker":"coffee"}');
        done();
      });
  });

  it('should get a 404', function(done) {
    chai.request('localhost:3000')
      .get('/nothinghere')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(404);
        expect(res.text).to.eql('not found');
        done();
      });
  });
});

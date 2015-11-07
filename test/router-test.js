var expect = require('chai').expect;
//make sure
var Router = require(__dirname + '/../lib/router');

//Used in class code as a refrence
//Used

describe('sludgy trucker coffee router', function() {

//the router should at a minimum has all of these properties
  it('should be a router', function() {
    expect(Router.routes).to.have.property('GET');
    expect(Router.routes).to.have.property('POST');
    expect(Router.routes).to.have.property('PUT');
    expect(Router.routes).to.have.property('PATCH');
    expect(Router.routes).to.have.property('DELETE');
  });
});

describe('a get request to an invalid route', function() {
  it('should respond with a 404', function() {
    var req = {
      url: 'this-coffee-tastes-horrible',
      method: 'GET'
    };
    var res = {
      writeHead: function(status, headers) {
        expect(status).to.eql(404);
        expect(headers).to.eql({"Content-Type": "text/plain"});
      },
      write: function(text){
        expect(text).to.eql('not found');
      },

      end: function() {

      }
    }
    Router.route(req, res);
    });
});

describe('a get request to a valid route', function() {
  it('should respond with a 200 status', function() {
    var req = {
      url: '/',
      method: 'GET'
    };
    var res = {
      writeHead: function(status, headers) {
        expect(status).to.eql(200);
        expect(headers).to.eql({"Content-Type": "text/html"});
      }
    }
    Router.route(req, res);
    expect(res).to.have.status(200);
  });
});

describe('a post request to a valid route', function() {
  it('should respond with a 200 status', function() {
    var req = {
      url: '/',
      method: 'POST',
      data: '{"nevergonna":"giveyouup"}'
    };
    var res = {
      writeHead: function(status, headers) {
        expect(status).to.eql(200);
        expect(headers).to.eql({"Content-Type": "text/html"});
        expect(res.text).to.eql('{"nevergonna":"giveyouup"}');
      }
    }
    Router.route(req, res);
    expect(res).to.have.status(200);
  });
});

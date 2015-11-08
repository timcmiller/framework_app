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

    };

    Router.route(req, res);

  });
});

describe('a get request to a valid route using our shorthand .get() with no second argument', function() {
  before(function(){
    Router.get('/');
  });

  it('should write that the user needs to inclde a second argument', function() {
    var req = {
      url: '/',
      method: 'GET'
    };
    var res = {
      writeHead: function(status, headers) {
        expect(status).to.eql(200);
        expect(headers).to.eql({"Content-Type": "text/plain"});
      },

      write: function(text){
        expect(text).to.eql('oops, looks like you forgot to include a 2nd argument in the .get()');
      },

      end: function() {
      }
    };
    Router.route(req, res);
  });
});

describe('a get request to a valid route using our shorthand .get() with a string for the 2nd parameter instead of a callback', function() {
  before(function(){
    Router.get('/', 'this is a string');
  });

  it('should respond with a 200 status and write a string', function() {
    var req = {
      url: '/',
      method: 'GET'
    };
    var res = {
      writeHead: function(status, headers) {
        expect(status).to.eql(200);
        expect(headers).to.eql({"Content-Type": "text/plain"});
      },

      write: function(text){
        expect(text).to.eql('this is a string');
      },

      end: function() {
      }
    };
    Router.route(req, res);
  });
});


describe('a get request to a valid route with a callback as the 2nd parameter', function() {
  before(function(){
    Router.get('/', function(req, res){
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.write('INSERT HTML FILE HERE');
      res.end();
    });
  });

  it('should respond with a 200 status', function() {
    var req = {
      url: '/',
      method: 'GET'
    };
    var res = {
      writeHead: function(status, headers) {
        expect(status).to.eql(200);
        expect(headers).to.eql({"Content-Type": "text/html"});
      },

      write: function(text){
        expect(text).to.eql('INSERT HTML FILE HERE');
      },

      end: function() {
      }
    };
    Router.route(req, res);
  });
});

describe('a post request to a valid route using our shorthand .post() but no second argument', function() {
  before(function(){
    Router.post('/coffay');
    });
  });
  it('should respond with a 200 status fo sho', function() {
    var req = {
      url: '/coffay',
      method: 'POST',
      data: '{"nevergonna":"giveyouup"}'
    };
    var res = {
      writeHead: function(status, headers) {
        expect(status).to.eql(200);
        expect(headers).to.eql({'Content-Type': 'application/json'});
      },
      write: function(text){
        expect(text).to.eql('{"nevergonna":"giveyouup"}');
      },
      end: function() {
      }
    };
    Router.route(req, res);
  });

describe('a post request to a valid route with a callback as the 2nd parameter', function() {
  before(function(){
    Router.post('/coffay', function(req, res){
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write('{"nevergonna":"giveyouup"}');
      res.end();
    });
  });
  it('should respond with a 200 status', function() {
    var req = {
      url: '/coffay',
      method: 'POST',
      data: '{"nevergonna":"giveyouup"}'
    };
    var res = {
      writeHead: function(status, headers) {
        expect(status).to.eql(200);
        expect(headers).to.eql({'Content-Type': 'application/json'});
      },
      write: function(text){
        expect(text).to.eql('{"nevergonna":"giveyouup"}');
      },
      end: function() {
      }
    };
    Router.route(req, res);
  });
});

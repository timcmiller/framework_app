var expect = require('chai').expect;
//make sure
var Router = require(__dirname + '/../lib/router');

//Used in class code as a refrence

describe('sludgy trucker coffee router', function() {

//before every test we want to make a new instance of Router
  beforeEach(function() {
    this.router = new Router();
  });

//the router should at a minimum has all of these properties
  it('should be a router', function() {
    expect(this.router.routes).to.have.property('GET');
    expect(this.router.routes).to.have.property('POST');
    expect(this.router.routes).to.have.property('PUT');
    expect(this.router.routes).to.have.property('PATCH');
    expect(this.router.routes).to.have.property('DELETE');
  });

  it('should respond with a 404', function() {
    this.router.route(req, res);
    expect(res).to.have.status(404);
  });
});

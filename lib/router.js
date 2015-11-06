//working off in class code

var Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
  };
};
(function() {
  this.get = function(route, cb) {
    this.routes['GET'][route] = cb;
  };

  this.post = function(route, cb) {
    this.routes['POST'][route] = cb;
  };

  this.post = function(route, cb) {
    this.routes['PATCH'][route] = cb;
  };

  this.post = function(route, cb) {
    this.routes['PUT'][route] = cb;
  };

  this.post = function(route, cb) {
    this.routes['DELTE'][route] = cb;
  };
}).call(Router.prototype);

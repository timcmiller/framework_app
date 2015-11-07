//working off in class code

module.exports = exports = new Router();
function Router() {

  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
  };
};


  Router.prototype.get = function(route, cb) {
    this.routes['GET'][route] = cb;
  };

  Router.prototype.post = function(route, cb) {
    this.routes['POST'][route] = cb;
  };

  Router.prototype.patch = function(route, cb) {
    this.routes['PATCH'][route] = cb;
  };

  Router.prototype.put = function(route, cb) {
    this.routes['PUT'][route] = cb;
  };

  Router.prototype.delete = function(route, cb) {
    this.routes['DELETE'][route] = cb;
  };

  Router.prototype.status404 = function(req, res){
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('not found');
    res.end();
  };

  Router.prototype.route = function(req, res) {
     (this.routes[req.method][req.url] || this.status404)(req, res);
  };


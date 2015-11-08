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
}

(function(){
  this.get = function(route, cb) {
    this.routes['GET'][route] = cb;
  };

  this.post = function(route, cb) {
    this.routes['POST'][route] = cb;
  };

  this.patch = function(route, cb) {
    this.routes['PATCH'][route] = cb;
  };

  this.put = function(route, cb) {
    this.routes['PUT'][route] = cb;
  };

  this.delete = function(route, cb) {
    this.routes['DELETE'][route] = cb;
  };

  this.status404 = function(req, res){
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('not found');
    res.end();
  };

  this.route = function(req, res) {
     (this.routes[req.method][req.url] || this.status404)(req, res);
  };

}).call(Router.prototype);

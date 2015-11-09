//working off in class code
var fs = require('fs');

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
  this.get = function(route, cbinput) {

    var cbstring = cbinput;

    function getDefaultCB(req, res){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write("oops, looks like you forgot to include a 2nd argument in the .get()");
      res.end();
    }

    function getCallbackStarter(req, res){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(cbstring);
      res.end();
    }

    var callback = getCallbackStarter;

    if (cbstring === undefined){
      callback = getDefaultCB;
    }

    if (typeof cbstring === 'function'){
      callback = cbinput;
    }

    this.routes['GET'][route] = callback;
  };

  this.post = function(route, cb) {

    function postDefaultCB(req, res){
      var totalData = '';
      req.on('data', function(data){
        totalData += data.toString();
      });
      req.on('end', function() {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(totalData);
        res.end();
      });
    }
    var callback =  cb || postDefaultCB;

    this.routes['POST'][route] = callback;
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

  var my404;
  this.custom404 = function(input){
    my404 = input;
  };

  this.status404 = function(req, res){
    if (typeof my404 === 'string'){
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write(my404);
      res.end();
    }

    if (!my404){
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('not found');
      res.end();
    }
  };

  this.staticFiles = function(route){
    /*
    fs.readdir(route, function(err, files){
      route = '/' + files[0];
      function staticCallback(req, res){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(route);
        res.end();
      }
      console.log(route);
      this.routes['GET'][route] = staticCallback;
    });*/
    var files = fs.readdirSync(route);
    route = '/' + files[0];
    console.log(route);
    function staticCallback(req, res){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(route);
        res.end();
    }
    this.routes['GET'][route] = staticCallback;
  };

  this.route = function(req, res) {
     (this.routes[req.method][req.url] || this.status404)(req, res);
  };

}).call(Router.prototype);

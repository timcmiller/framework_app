//working off in class code
var fs = require('fs');
var filePath = require('path');
var getContentType = require(__dirname + '/content-type.js');

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

  this.getStatic = function(file, route, cb){
      var fileCallback = function fileCallback(req, res){
        var rstream = fs.createReadStream(file);
        var body = "";
        rstream.on('data', function(chunk){
          body += chunk.toString();
        });
        rstream.on('end', function(){
          res.writeHead(200, {'Content-Type': getContentType(file)});
          res.write(body);
          res.end();
        });
      };
      route = route || '/'+ filePath.basename(file);
      var callback = cb || fileCallback;
      this.routes['GET'][route] = callback;
  };

  this.route = function(req, res) {
     (this.routes[req.method][req.url] || this.status404)(req, res);
  };

}).call(Router.prototype);

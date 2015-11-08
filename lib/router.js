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

(function(){
  this.get = function(route, cbinput) {
    var cbstring = cbinput


  function getDefaultCB(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("THIS IS THE DEFAULT TEXT");
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
    console.log(typeof cbstring)
    if (typeof cbstring === 'function'){
      callback = cbinput;
    }

    this.routes['GET'][route] = callback;
  }

  this.post = function(route, cb) {

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

  this.status404 = function(req, res){
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('not found');
    res.end();
  };

  this.route = function(req, res) {
     (this.routes[req.method][req.url] || this.status404)(req, res);
  };

}).call(Router.prototype);

var http = require('http');

module.exports = exports = new Server();

function Server() {


}

(function(){
  this.listen = function(port) {
    port = port|| process.env.PORT || 3000;

    http.createServer(function(req, res){

    }).listen(port, function() {
      console.log('The server is running on port: ' + port);
    });
  };

}).call(Server.prototype);



var http = require('http');
var port = process.argv[2] || process.env.PORT || 3000;

module.exports = exports = function server(){

  http.createServer(function(req, res){

  })
  .listen(port, function(){
    console.log('The server is running on port: ' + port);
  });
}

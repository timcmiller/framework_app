var http = require('http');
var router = require(__dirname + '/router.js');

var port = process.argv[2] || process.env.PORT || 3000;

  router.get('/awesome', function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.write('wow, so awesome, such router');
  res.end();
});


module.exports = exports = function server(){
  http.createServer(function(req, res){
    router.route(req, res);

  })
  .listen(port, function(){
    console.log('The server is running on port: ' + port);
  });
};

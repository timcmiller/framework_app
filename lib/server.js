var http = require('http');
var router = require(__dirname + '/router.js');

var port = process.argv[2] || process.env.PORT || 3000;
var GetDestination = require(__dirname + '/routes.js');

router.get('/awesome', function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.write('INSERT HTML FILE HERE');
  res.end();
});

router.post('/awesomer', function(req, res){
  var totalData = '';
  req.on('data', function(data){
    totalData += data.toString();
  });
  req.on('end', function() {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(totalData);
    res.end();
  });
});

module.exports = exports = function server(){
  http.createServer(function(req, res){
    router.route(req, res);

  })
  .listen(port, function(){
    console.log('The server is running on port: ' + port);
  });
};

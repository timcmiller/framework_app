# sludgy-trucker-coffee

[![Build Status](https://travis-ci.org/timcmiller/sludgy-trucker-coffee.svg)](https://travis-ci.org/timcmiller/sludgy-trucker-coffee)

<strong>The sludgy-trucker-coffee (STC) http Framework</strong>

How to use the STC framework
=====================
Installation
-------------
```npm install sludgy-trucker-coffee```

Features
-----------


Creating a server with the STC framework
--------------------
```
var router = require('sludgy-trucker-coffee').router;
var server = require('sludgy-trucker-coffee').server;

//setting up a route for a GET request
router.get('/finecupofcoffee', function(req, res){
  console.log('get request');
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.write('wow, so awesome, such framework');
  res.end();
});

//setting up a route for a POST request
router.post('/finecupofjoe', function(req, res){
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

//a GET request for a 404 page
router.get('/cantgetnosatisfaction', function(req, res){
  res.writeHead(404, {'Content-Type' : 'text/plain'});
  res.write('not found');
  res.end();
});

server.listen(3000);

```

Testing
-------
We like using superagent-cli to test out our server. First thing's first:
```
npm install superagent-cli -g
```
Then fire up your server!
```
node myserver.js 3000
//'The server is running on port: 3000'
```

Using superagent-cli
```
superagent localhost:3000
```
returns 'wow, so awesome, such framework'

and
```
superagent localhost:3000/cantgetnosatisfaction
```
returns 'not found'

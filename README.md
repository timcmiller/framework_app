# sludgy-trucker-coffee

[![Build Status](https://travis-ci.org/timcmiller/sludgy-trucker-coffee.svg)](https://travis-ci.org/timcmiller/sludgy-trucker-coffee)

<strong>The sludgy-trucker-coffee (STC) http Framework</strong>

How to use the STC framework
=====================
Installation
-------------
```npm install sludgy-trucker-coffee```


Creating a server with the STC framework
--------------------
```
var stc = require('sludgy-trucker-coffee');

//setting up a route for a GET request
stc.router.get('/finecupofjoe', "damn that's fine coffee");

//You can post a get route without a second argument. It will return some reminder test to do so ;)
stc.router.get('/default');

//For those who want a little more control, you can add a callback
stc.router.get('/thehardway', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Here be some text I wrote the hard way");
    res.end();
  });

//NOTE: If you want to serve up more than plain text (Like HTML), you MUST add a callback and use res.writeHead.

//setting up a route for a POST request
stc.router.post('/posting');

//404 messages are already set up for you!

//Setting up a server is easy as a sludgy cup of Folgers Instant!
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

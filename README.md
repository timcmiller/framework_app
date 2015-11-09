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
```var stc = require('sludgy-trucker-coffee');```

Setting up a route for a GET request:

```
stc.router.get('/finecupofjoe', "damn that's fine coffee");
```
will print "damn that's a fine cup of coffee" when you visit /finecupofjoe.

You can post a get route without a second argument, but will return some reminder test to do so ;)

```
stc.router.get('/default');
```
will give you the default reminder text when you go to /default.

For those who want a little more control, you can add your own callback:

```
stc.router.get('/thehardway', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Here be some text I wrote the hard way");
    res.end();
  });
```

NOTE: If you want to serve up more than plain text (like HTML), you <strong>MUST</strong> add a callback and use res.writeHead.


You can set up a POST request with your own custom callback:
```
stc.router.post('/postwithcustomcallback', function(req, res){
      var totalData = '';
      req.on('data', function(data){
        totalData += data.toString();
      });
      req.on('end', function() {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(totalData);
        res.end();
      });
```
and setting up a route for a POST request is easy if you can use the default callback provided above.  Simply use the following code:

```
stc.router.post('/yourownurl');
```

404 messages are already set up for you! But if you want to create custom 404 messages you can! Simply use the .custom404 method:

```
stc.custom404('some custom message here');
```

Lastly, setting up a server is easy as a sludgy cup of Folgers Instant!

```
stc.server.listen(3000);

```

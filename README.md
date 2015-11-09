# sludgy-trucker-coffee

[![Build Status](https://travis-ci.org/timcmiller/sludgy-trucker-coffee.svg)](https://travis-ci.org/timcmiller/sludgy-trucker-coffee)

<strong>The sludgy-trucker-coffee (STC) http Framework</strong>

How to use the STC framework
=====================
Installation
-------------
```npm install sludgy-trucker-coffee```

To then use STC you must require in ('sludgy-trcuker-coffee').

```var stc = require('sludgy-trucker-coffe')```


Router Methods
<ul>
  <li><a href="get-request">stc.router.get</a></li>
  <li><a href="post-request">stc.router.post</a></li>
  <li><a href="custom-404">stc.router.custom404</a></li>
</ul>
Server Methods
<ul>
  <li><a href="listen">stc.server.listen</a></li>
</ul>
--------------------

<h4><span a name="get-request">Setting up a route for a GET request:</span></h4>

<strong>stc.router.get(pathname, [plain/text])</strong>

Sets up a basic route on your server that will return the plain/text you give it as a second argument

1. Pathname: Any valid url character may be used in the form of a string.
2. Response(optional): The response you want the server to send and thus be displayed on a browser if you navigate to this route. If you do not include a response it defaults to placeholder.

```
stc.router.get('/finecupofjoe', "damn that's fine coffee");
```

will print "damn that's a fine cup of coffee" when you visit /finecupofjoe.

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


<h4><span a name="post-request">Setting up a route for a POST request:</span></h4>

<strong>stc.router.post(pathname, callback)</strong>

1.Pathname: Any valid url character may be used in the form of a string.
2.Callback[optional]: A callback function with the parameters of request and response. If left black will default to an empty response.

and setting up a route for a POST request is easy if you can use the default callback provided above.  Simply use the following code:

```
stc.router.post('/yourownurl');
```

Here is an example of an optional callback.

```
stc.router.post('/postwithcustomcallback', function(request, respnse){
      var totalData = '';
      request.on('data', function(data){
        totalData += data.toString();
      });
      request.on('end', function() {
        response.writeHead(200, {"Content-Type": "application/json"});
        resresponse.write(totalData);
        resresponse.end();
      });
```

<h4><span a name="custom-404">Setting up your own customer 404 response:</span></h4>

<strong>stc.router.custom404(string)</strong>

1.String: Any sting you use in here will then be set as your 404 response message.

404 messages have a default already built in. But if you want to create custom 404 messages you can.

```
stc.custom404('some custom message here');
```

Every 404 you encounter will now respond with 'some custom message here'.

<h4><span a name="listen">Starting up your server:</span></h4>

<strong>stc.server.listen([port])</strong>

1.Port(optional): You can set what port you want your server to be on. If you provide no arguments it will default to 3000.


```
stc.server.listen(5000);

```

Your server is now listen on port 5000.

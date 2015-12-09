'use strict';

var fs = require('fs');
var http = require('http');


//TODO create a server using http
//TODO start the server on port 8000

function handleRequest(req, res) {
  if (req.url === '/' || req.url === '/index.html') {
    res.setHeader("Content-Type", "text/html");
    fetchFile(req, res, './index.html');
  } else if (req.url === '/app.js') {
    res.setHeader("Content-Type", "text/javascript");
    fetchFile(req, res, './app.js');
  } else if (req.url === '/api') {
    res.setHeader("Content-Type", "application/json");
    fetchFile(req, res, './data.json');
  } else {
    respondError(req, res);
  }
}

var server = http.createServer(handleRequest);

server.listen(8000, function() {
	console.log("Up and runnin'");
});

function fetchFile(req, res, filename){
  //read a file asynchronously using fs. Once the file has been read fs will
  //invoke the callback function passing in an error or data.
  fs.readFile(filename, function(err, data){
    if (err) {
      res.statusCode = 500;
      res.write('We screwed up!');
      res.end();
    }
    handleFileLoad(req, res, err, data);
  });
}

function handleFileLoad(req, res, err, data){
  if (err) { //if an error exists
    respondError(req, res);
  } else { // else we successfully loaded the file

    //TODO set the status code to 200 to show that we succeeded.
    res.statusCode = 200;
    //TODO write the file data to the response. We use toString to make it human readable.
    res.write(data.toString());
    //TODO send the response back to the client.
    res.end();
  }
}

function respondError(req, res) {
  res.statusCode = 404;
  res.write('<h1>404: The item you requested does not exist.');
  res.end();
}

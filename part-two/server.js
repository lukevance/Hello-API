'use strict';

var fs = require('fs');
var http = require('http');

//TODO include monk
//TODO get db instance (or you could do both in one line)
//NOTE: ensure the mongod daemon is running
//TODO get collection, might have to use mongo shell to create collection


// create a server using http
var server = http.createServer(handleRequest);
// start the server on port 8000
server.listen(8000, function() {
	console.log("Server is running on 8000");
});


function handleRequest(req, res) {

	//TODO add route for `api/get`
	//TODO add route for `api/create`
  if (req.url === '/' || req.url === '/index.html') {

    res.setHeader("Content-Type", "text/html");
    fetchFile(req, res, './index.html');

  } else if (req.url === '/app.js') {

    res.setHeader("Content-Type", "text/javascript");
    fetchFile(req, res, './app.js');

  } else if (req.url === '/api'){
		//TODO remove me
  } else {
    respondError(req, res);
  }
}



function fetchFile(req, res, filename){
  //read a file asynchronously using fs. Once the file has been read fs will
  //invoke the callback function passing in an error or data.
  fs.readFile(filename, function(err, data){
    handleFileLoad(req, res, err, data);
  });
}

function handleFileLoad(req, res, err, data){
  if (err) { //if an error exists
    respondError(req, res);
  } else { // else we successfully loaded the file

    // set the status code to 200 to show that we succeeded.
    res.statusCode = 200;
    // write the file data to the response. We use toString to make it human readable.
    res.write(data.toString());
    // send the response back to the client.
    res.end();
  }
}

function respondError(req, res) {
  res.statusCode = 404;
  res.write('<h1>404: The item you requested does not exist.');
  res.end();
}

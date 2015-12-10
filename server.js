'use strict';

var fs = require('fs');
var http = require('http');


//TODO create a server using http
function handleRequest(req, res){
  if (req.url === '/' || req.url === '/index.html'){
    // send index.html
    fetchFile(req, res, './index.html');
  } else if (req.url === '/app.js') {
    // send app.js
    fetchFile(req, res, './app.js');
  } else if (req.url === '/api'){
    // send data.json
    fetchFile(req, res, './data.json');
  } else {
    // 404 not found
    res.write('404 not found');
    res.end();
  }
}

var server = http.createServer(handleRequest);

//TODO start the server on port 8000
server.listen(8000, function(){
  console.log("I'm listening on port 8000...");
});


function fetchFile(req, res, filename){
  //read a file asynchronously using fs. Once the file has been read fs will
  //invoke the callback function passing in an error or data.
  fs.readFile(filename, function(err, data){
    handleFileLoad(req, res, err, data);
  });
}

function handleFileLoad(req, res, err, data){
  if(err){ //if an error exists
   throw err;
  } else { // else we successfully loaded the file
    //set the status code to 200 to show that we succeeded.
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    //write the file data to the response. We use toString to make it human readable.
    res.write(data.toString());
    //send the response back to the client.
    res.end();
  }
}

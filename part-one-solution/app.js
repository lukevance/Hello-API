'use strict';

//TODO implement the jQuery ajax call here and console log the data
function getData() {
  $.get("http://localhost:8000/api", function(data) {
    // alert('Data loaded:' + data);
    console.log(data);
  });
}

getData();
//See https://api.jquery.com/jquery.get/ for an example of the get function

//Alternatively

//See http://api.jquery.com/jquery.ajax/ for an exmaple of the ajax function

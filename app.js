'use strict';
//
$.ajax({
    url: 'http://localhost:8000/api',
    json: "callback",
    dataType: "json"
  }).done(function main(data) {
    console.log(data);
  });

//implement the jQuery ajax call here and console log the data

//See https://api.jquery.com/jquery.get/ for an example of the get function

//Alternatively

//See http://api.jquery.com/jquery.ajax/ for an exmaple of the ajax function

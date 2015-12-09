'use strict';

function getData() {
  $.get("http://localhost:8000/api/get", function(data) {
    console.log(data);
  });
}

function createData() {
  $.get("http://localhost:8000/api/create", function(data) {
    console.log(data);
  });
}

createData();

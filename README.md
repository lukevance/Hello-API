# Hello API

Today we will write our first API and make a call to it.

## Step One

In the server.js file create an HTTP server, there is already a function to read a file.

1. When it receives a request with url `/` or `/index.html` send the file `index.html` as the response.
1. When it receives a request with `/app.js` send the file `app.js` as the response
1. When it receives a request with `/api` send the file `data.json` as a the response.
1. When it receives a request with any other URL send message back to the user with statusCode 404.

# BONUS

In the app.js

1. Make an AJAX get request using jQuery to the url `localhost:8000/data.json`
1. console.log the result

# Testing

1. Open `localhost:8000` in the browser with the url you want to test.
1. For the bonus: open up the console and see the result!

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const page = `<html>
  <head>
    <title>Chervase van Leeuwen</title>
  </head>
  <body>
    <h1>Joke setup</h1>
    <p>Punchline</p>
  </body>
</html>`;

app.get('/', (request, response) => {
  response.send(page);
});

function onListen() {
  console.log(`Listening on: ${port}`);
}

app.listen(port, onListen);
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const page = `<html>
  <head>
    <title>Chervase van Leeuwen</title>
    <style>
      body {
        background-color: rgba(167, 251, 146, 0.32);
        text-align: center;
      }

      h1 {
        color: #155704;
        font-family: Arial;
        padding: 1rem;
        font-size: 3rem;
        margin-top: 7rem;
      }

      p {
        font-family: Arial;
        font-size: 2.5rem;
        color: orange;
        padding-top: 3rem;
      }
    </style>
  </head>
  <body>
    <h1>The only web developers happy to find a bug</h1>
    <p>Spiders</p>
  </body>
</html>`;

app.get('/', (request, response) => {
  response.send(page);
});

function onListen() {
  console.log(`Listening on: ${port}`);
}

app.listen(port, onListen);
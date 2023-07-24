// create web server with express
import express from 'express';
const app = express();
const port = 3000;

// create a route with express
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
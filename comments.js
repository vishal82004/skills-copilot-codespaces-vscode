// create web server
const express = require('express');
const app = express();
const port = 3000;

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Server is running `);
});

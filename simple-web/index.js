const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

// The PORT below is the CONTAINER'S PORT, not your localhost port
app.listen(8080, () => {
  console.log('App running on port 8080');
});

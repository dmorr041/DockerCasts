const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient();
client.set('visits', 0);

const CONTAINER_PORT = 8081;

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send(`Number of visits is ${visits}`);
    client.set('visits', parseInt(visits, 10) + 1);
  });
});

app.listen(CONTAINER_PORT, () => {
  console.log(`Listening on port ${CONTAINER_PORT}`);
});
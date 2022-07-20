const express = require('express');
const app = express();
const PORT = 6000;

app.post('/clickup', (req) => {
  console.log('endpoint is called');
});

app
  .listen(PORT, () => {
    `Server is listening on port ${PORT}`;
  })
  .on('error', (err) => {
    console.log('err', err);
  });

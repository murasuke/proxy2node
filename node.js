const express = require('express');
const app = express();
const port = 3333;

app.use('/node', (req, res) => {
  console.log(`${new Date()} ${req.baseUrl}`);
  res.send('Node.js');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

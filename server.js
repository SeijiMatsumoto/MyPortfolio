const express = require('express');
const app = express();
const port =  process.env.PORT || 3001;
const { pki } = require('./pki.js');


app.use(express.static('public'));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
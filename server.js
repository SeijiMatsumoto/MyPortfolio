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
  console.log(pki);
});

app.get('/.well-known/pki-validation/502F3843D1DC70C993E84C35B45E35CB.txt', (req, res) => {
  res.send(pki);
})
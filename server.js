const express = require('express');
const app = express();
const port =  process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
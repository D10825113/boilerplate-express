require('dotenv').config();
let express = require('express');
let app = express();




app.get('/', (req, res) => {
  res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE==="uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message });
});
































module.exports = app;

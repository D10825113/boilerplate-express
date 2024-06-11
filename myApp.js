let express = require('express');
let app = express();



app.get('/', (req, res) => {
  res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  res.json({"message": "Hello json"});
});

































module.exports = app;

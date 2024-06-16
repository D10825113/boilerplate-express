require('dotenv').config();
let bodyParser = require('body-parser');
let express = require('express');
let app = express();

// 實現根級請求記錄器中間件
app.use(function (req, res, next) {
  const method = req.method;
  const path = req.path;
  const ip = req.ip;

  console.log(`${method} ${path} - ${ip}`);

  next(); // 傳遞控制權給下一個中間件或路由處理器
});

app.get('/', (req, res) => {
  res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message });
});

// 鏈式中間件創建時間伺服器
app.get('/now', function (req, res, next) {
  req.time = new Date().toString();
  next();
}, function (req, res) {
  res.json({ time: req.time });
});

// 從客戶端獲取路由參數輸入 /:word/echo
app.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word });
});

// 從客戶端獲取查詢參數輸入 /name?
app.get('/name', (req, res) => {
  // let { first: firstName, last: lastName } = req.query;
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({ name: `${firstName} ${lastName}` });
});

// 使用 POST 方法獲取表單輸入(初始化)
app.use(bodyParser.urlencoded({ extended: false })); // 解析 application/x-www-form-urlencoded
app.use(bodyParser.json()); // 解析 application/json

// 使用 POST 方法獲取表單輸入
app.post('/name', (req, res) => {
  let firstName = req.body.first;
  let lastName = req.body.last;
  res.json({ name: `${firstName} ${lastName}` });
});





















module.exports = app;

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Lỗi</h1>');
});

server.listen(process.env.PORT || 80, function(){
	console.log('server dang chay....');
});

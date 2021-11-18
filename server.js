
var express = require('express');
var app = express();
app.use(express.static('./www'));

var server = require('http').Server(app);


  
 
app.get('/', (req, res) => {
const UserAgent = require('user-agents');
const userAgent = new UserAgent();
console.log(userAgent.toString());

    
});



server.listen(process.env.PORT || 80, function(){
	console.log('server dang chay....');
});
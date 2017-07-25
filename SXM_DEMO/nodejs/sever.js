
var http = require('http');



var sever = http.createServer(function(req,res){



  res.writeHead(200,{'Content-Type':'text/plain'});



  res.end('Hello nodejs\n');



})
sever.listen(1231,'192.168.0.8');



console.log('Server running at http://192.168.0.8:1231');


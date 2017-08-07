
//var http = require('http');
//
//
//
//var sever = http.createServer(function(req,res){
//
//
//
//res.writeHead(200,{'Content-Type':'text/plain'});
//
//
//
//res.end('Hello nodejs\n');
//
//
//
//})
//sever.listen(1231,'192.168.0.8');
//
//
//
//console.log('Server running at http://192.168.0.8:1231');


// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');

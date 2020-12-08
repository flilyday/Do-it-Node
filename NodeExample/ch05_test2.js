var http = require('http')

var server = http.createServer()

var host = '192.168.0.5';
var port = 3000

server.listen(port, host, 50000, function(){
    console.log('서버 실행됨 -> ' + host + ' : ' + port)
})

server.on('connection', function(socket){
    console.log('클라이언트가 접속함')
})

server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어옴');
    // console.dir(req);
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>Welcome</h1>')
    res.end()
})
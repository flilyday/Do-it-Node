var http = require('http');
var fs = require('fs');

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

    var filename = 'house.png';
    fs.readFile(filename, function(err, data){
        res.writeHead(200, {'Content-Type':'image/png'});
        res.write(data);
        res.end()
    });
    // 요청이 들어오면 어떻게 응답할지를 on에 등록시켜 놓고, 콜백함수로 어떻게 보낼지 정할 수 있음.
    // mimetype : 어떤식으로 응답할 지 정할 수 있음.

})
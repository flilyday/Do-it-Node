var http = require('http')

var server = http.createServer()

var port = 3000;
var host = '192.168.0.5';

server.listen(port, host, 50000, function(){
    console.log("서버가 실행되었습니다 -> : " + host + ':' + port)
})

//host 다음에 나오는 숫자는 백로그(동시접속자수 제한)
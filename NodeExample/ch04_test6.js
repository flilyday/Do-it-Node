// 비동기식 파일 읽기 : 다 읽은 후에 찍는다. fs.readFile()메서드 뒤에 다른 함수가 있으면 먼저 호출된다.
var fs = require('fs')

fs.readFile('../package.json','utf8',function(err, data){
    console.log(data);
})
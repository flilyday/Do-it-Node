//동기식 파일 읽기
var fs = require('fs')

var data = fs.readFileSync('../package.json', 'utf8');
console.log(data);
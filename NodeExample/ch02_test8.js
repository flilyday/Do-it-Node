var path = require('path')

var directories = ['Users', 'mars', 'docs']
var dirStr = directories.join();
console.log(dirStr);

var dirStr2 = directories.join(path.sep);
console.log(dirStr2);

var dirStr3 = path.join('Users/mars', 'nodepad.exe')
console.log(dirStr3)

//path객체의 매서드 활용하기
//join : 파일 경로를 합쳐준다.
var filepath = path.join('Users/mars', 'notepad.exe')
console.log('filepath :' + filepath);

//dirname : 경로를 리턴한다.
var dirname = path.dirname(filepath)
console.log(dirname)

//basename : 해당파일의 이름을 리턴한다.
var basename = path.basename(filepath)
console.log(basename)

//extname : 해당파일의 확장자를 리턴한다.
var extname = path.extname(filepath)
console.log(extname)
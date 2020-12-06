var calc = require('./calc2')

console.log('불러온 객체를 테스트 해보기 : ' + calc.add(20, 20))

var nconf = require('nconf')
nconf.env();
var value = nconf.get('OS')
console.log(value)
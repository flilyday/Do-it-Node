//내가 만든 커스텀 모듈에 이벤트 등록하기

var Calc = require('./calc3');

var calc1 = new Calc();
calc1.emit('stop');

console.log('Calc에 stop이벤트 전달함')
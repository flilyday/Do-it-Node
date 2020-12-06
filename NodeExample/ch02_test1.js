console.log("Hello")
console.log("숫자 : %d", 10)
console.log("문자 : %s", 'character')

var sosi = {
    name : '소녀시대',
    age : '20'
}
console.log("자바스크립트객체 : %j", sosi)

//자주 사용하는 console객체의 매서드
//1.해당 객체가 가지는 모든 값을 출력 console.dir
console.dir(sosi)

//2.시간을 측정 console.time
console.time('duration')
var result = 0;
for (i=0; i<10000; i++) {
    result += i;
}
console.timeEnd('duration')

//3.전역변수 __filename과 __dirname

console.log("파일 이름 : %s", __filename);
console.log("파일 패스 : %s", __dirname);

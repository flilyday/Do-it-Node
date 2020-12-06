var calc = {}

calc.add = function(a, b){
    return a+b;
}

console.log('모듈로 분리하기 전 : ' + calc.add(3, 4))

//전역 객체 설명
// exports : 함수를 담을 수 있는 전역 객체
// module.exports : 객체를 담을 수 있는 전역 객체
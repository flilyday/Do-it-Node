function add(a, b, callback) {
    var result = a + b;
    callback(result)
}

add(10, 10, function(result){
    console.log('콜백함수 안에서 더하기 결과(a + b) : ' + result)
})

//이벤트 처리

process.on('exit', function(){
    console.log('exit 이벤트 발생함.')
});
//process객체에 exit라는 이벤트 이름을 등록해 놓음 -> exit가 발생하면 두번째 인자로 넘겨준 콜백함수가 실행됨

setTimeout(function(){
    console.log('2초 후에 실행 되었음.')
    process.exit();
}, 2000);   //2초 후에 실행되는 함수 정의 및 실행


console.log('2초 후에 실행될 것임')
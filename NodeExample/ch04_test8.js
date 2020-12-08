// 미세한 파일 읽기/쓰기 컨트롤이 필요한 경우 fs를 쓴다

var fs = require('fs')

fs.open('./output.txt', 'w', function(err, fd){
    if(err){
        console.log('파일 열기시 에러 발생');
        console.dir(err);
        return
    }
    var buf = new Buffer('안녕!\n')
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
        if(err){
            console.log('파일 쓰기 에러 발생')
            console.dir(err)
            return
        }
        console.log('파일 쓰기 완료함')

        fs.close(fd, function(){
            console.log('파일 닫기 완료함')
        });
    });
});
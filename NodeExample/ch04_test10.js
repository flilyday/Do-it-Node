//버퍼 객체
var output = '안녕!'
var buffer1 = new Buffer(10);
var len = buffer1.write(output, 'utf-8')
console.log('문자열에 쓰인 길이 : ' + len)
console.log('첫번째 버퍼에 쓰인 문자열 : ' + buffer1.toString())
console.log('버퍼 객체인지 여부 : ' + Buffer.isBuffer(buffer1))

var byteLen = Buffer.byteLength(buffer1)
console.log('byteLen : ' + byteLen)

var str1 = buffer1.toString('utf8', 0, 7)
console.log('str1 :' + str1)

// 버퍼 = 데이터 저장 상자, 한 번 선언하고 나면 길이를 조정할 수 없다.
var buffer2 = Buffer.from('Hello', 'utf8')
console.log('두번째 버퍼의 길이 : '+Buffer.byteLength(buffer2))

var str2 = buffer2.toString('utf8', 0, Buffer.byteLength(buffer2))
console.log('str2 : '+ str2)
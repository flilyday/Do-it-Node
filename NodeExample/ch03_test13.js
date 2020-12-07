var users = [{name : 'sosi', age : 20}, {name : 'cara', age : 30}, {name : 'tiara', age : 20}]
// delete users[1]
console.log(users)

users.forEach(function(elem, index){
    console.log('원소 :' + index); console.dir(elem) })

users.splice(1, 0, {name : 'afterschool', age : 33})
console.dir(users)

users.splice(2, 1)
console.dir(users)

//splice(시작번호부터, 몇개 짜를지)
//splice(시작번호부터, 0, 내용) <- 자르지 않고 추가하게 된다.

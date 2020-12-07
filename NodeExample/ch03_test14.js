var users = [{name : 'sosi', age : 20}, {name : 'cara', age : 30}, {name : 'tiara', age : 20}, {name:'afterschool', age : 15}]

console.log('users 객체')
console.dir(users)

var users2 = users.slice(1, 3)
console.dir(users2)

var user3 = users2.slice(1)
console.log(user3)

// slice(자를 인덱스 시작 번호, 자를 인덱스 끝번호) <-(시작번호부터 ~ 끝번호-1) 까지 잘린다
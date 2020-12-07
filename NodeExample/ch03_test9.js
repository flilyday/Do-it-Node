var users = [{name : 'sosi', age : 20}, {name : 'cara', age : 30}]
users.push({name : 'hot', age : 40})

var oper = function(a, b) {
    return a + b;
}
users.push(oper)

console.dir(users)
console.log(users[3](30, 20))
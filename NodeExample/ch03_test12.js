var users = [{name : 'sosi', age : 20}, {name : 'tiara', age : 30}]
console.log(users.length)

users.unshift({name : 'hot', age : 40})
console.dir(users)

console.log(users.length)

var elem = users.shift()
console.log(users.length)

console.dir(elem)
var users = [{name : 'sosi', age : 20}, {name : 'cara', age : 30}, {name : 'tiara', age : 20}]

for (var i=0; i<users.length; i++) {
    console.log('배열 원소 # :' + i + users[i].name);
}

users.forEach(function(elem, index){
    console.log('배열 원소 # :' + index + ':' + elem['name'])
})

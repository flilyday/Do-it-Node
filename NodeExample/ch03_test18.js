// JavaScript Prototype Object
// 객체의 원형을 프로토타입이라 하고, 이 프로토타입이 클래스 역할을 함
// 프로토타입을 만들고 new 연산자를 이용해 새로운 객체를 만들어 낼 수 있음

// 자바스크립트 프로토타입의 특징
// 1. 클래스 형태가 아니라 함수를 이용해서 만들고
// 2. new라는 연산자를 사용하는 시점에 생성자 함수로 작동시켜 사용한다.


person1 = {name : 'sosi', age : 20}
person2 = {name : 'tiara', age : 22}

function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.walk = function(speed) {
    console.log("시속 " + speed + "로 걸어갑니다.")
}

person3 = new Person('Amy', 33)
console.log(person3)
console.log(person3.walk(20))

let arr = [1,2,3,4]

const result = arr.map(num => num * 10);

console.log(result)

const marks = [30, 80, 45, 90, 60];

const passed = marks.filter(function(mark){
    return mark >= 50;
});

console.log(passed);


const arr1 = [1,2,6,7,3,9];

const result1 = arr1.filter(num => num > 5);

console.log(result);

const numbers = [1,2,3,4,5];

const sum = numbers.reduce(function(total, no){
    return total + no;
}, 0)

console.log(sum)

// arr.reduce((sum,x) => sum + x, 0)

const users = [
  {name: "Vishnu", age: 22},
  {name: "Rahul", age: 17},
  {name: "Amit", age: 25}
];

const nam = []
for(let i=0; i<users.length; i++){
    nam.push(users[i].name)
}
console.log(nam)

const names = users.map(user => user.name)
console.log(names)

let age = []
for(let i=0; i<users.length; i++){
    if(users[i].age>=18){
    age.push(users[i])
    }
}
console.log(age)

let adult = users.filter(user => user.age >= 18)
console.log(adult)

let tot = 0;
for(let i=0; i<users.length; i++){
    tot = tot + users[i].age
}
console.log(tot)

// const totalAge = users.reduce(total,sum => total + sum)

let filterName = []
for(let i=0; i<users.length; i++){
    if(users[i].age >= 18){
        filterName.push(users[i].name)
    }
}
console.log(filterName)

let nameBoth = users.filter(x => x.age >= 18).map(x => x.name)
console.log(nameBoth)

const car = {
    brand : "Toyota",
    model : "Corolla",
    year : 2024
}
console.log(car.brand)
car.year = 2025;
car.color = "Black"

console.log(car.year)
console.log(car.color)

const person = {
    name : "vaasu",
    age : 56,
    greet : function(){
        console.log("Hello "+this.name)
    }
}
person.greet()

const cars = {
    brand : "Toyota",
    model : "Corolla",
    showInfo () {
        console.log(this.brand + this.model)
    }
}
cars.showInfo()

class carr {
    constructor(brand,model){
        this.brand = brand,
        this.model = model
    }
    showInfo() {
        console.log(`${this.brand} ${this.model}`)
    }
}

const car1 = new carr("Toyota", "Carolla")
car1.showInfo()
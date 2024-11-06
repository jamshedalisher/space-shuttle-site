// Encapsulation ==

// let bankMoney = 3000
// let walletMoney = 10
// function totalMoney () {
//     return `your total is ${bankMoney + walletMoney}`
// }


// function totalMoney () {
// let bankMoney = 3000
// let walletMoney = 10
// console.log(bankMoney)
//     return `your total is ${bankMoney + walletMoney}`
// }


// Pillar: Inheritance

// const arr = [1,2,3]
// arr


// Polymorphism

// function person (name, age) {
//     console.log(name, age)
// }


// A collection of un ordered Key/value pairs

// const obj = {
//     name: 'jamshed',
//     age: 33,
//     greet: function() {
//         console.log('hello')
//     }
// }

// for (const key in obj) {
//     console.log(obj [key])
// }

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// in the internet

// 'age' in obj
// 'name' in obj
// obj.hasOwnProperty('name')


// JavaScript Objects: Access Properties and Methods

// const sum = 2+4 
// const obj = {
//     name: 'fillip',
//     [sum]: 'sex',
//     1: 'one',
//     age: 33,
//     greet: function (){
//         console.log('hello')
//     }  
// }

// Functions and Arrays as Objects

// function greet (){
//     console.log('helloooo')
// }

// const arr = [5, true, 'phillips',{}]

// Understanding "This" keyword

// console.log(this)
// const btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//     this.textContent += 'Aliseena'
// })

// function test (){
//     console.log(this)
// }

// const obj ={
//     x: this
// }

// const obj = {
//     age: 33,
//     obj2: {
//         year: 2022,
//         this: () => {console.log(this.this)}
//     }   
// }

// Using the 'new' Keyword

// function person(name, age) {
//     this.name = name
//     this.age = age
// }

// const phillips = new person ('phillip',33)

// Constructors Functions

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   const auto = new Car('Honda', 'Accord', 1998);
  
//   console.log(auto instanceof Car);

// const arrOfNames = ['bob', 'jack', 'tony', 'john']

// function person (name) {
//     this.name = name
// }
// const placeHolder = []
// for (const name of arrOfNames) {
//     placeHolder.push(new person(name))
// }

// console.log(placeHolder)
// const [bob,jack,tony,john] = placeHolder

// function Person(name,age) {
//     this.name = name
//     this.age = age
//     this.greet = function(){
//         return `hello I am ${this.name} and I am ${this.age} years old`
//     }
// }

// const jamshed = new Person ('jamshed', 33)
// const aliseena = new Person ('aliseena', 3)

// const obj1 = {
//     name: 'pillip'
// }

// const descriptor = {
//     name: {
//         value: 'phillip',
//         writable: true,
//         enumerable: false,
//         configurable: false,
//     }
// }
// const obj2 = Object.create(Object.prototype, descriptor)


// const objPhil = {
//     name: 'phil',
//     favFood: 'lobster tails'
// }

// const objPatrick = {
//     name: 'Patrick',
//     retired: true,
//     favFood: 'cowboy steak'
// }

// const makeMeThePrototype = {
//     isRetired: function(){
//         if (this.retired) {
//             console.log(`Hello, ${this.name} is Retired`)
//         } else {
//             console.log(`${this.name} is Not Retired`)
//         }
//     },
//     getFavFood: function(){
//         console.log(`${this.name} is favorite food is ${this.favFood}`)
//     }
// }

// const newPhil = Object.assign(Object.create(makeMeThePrototype),objPhil)

// const me = {
//     name: 'phil',
//     age: 33,
//     isCool: true,
//     favFood: ['pizza', 'burger', 'steak', 'lobster'],
//     address: {
//         streetName: 'shirley',
//         streetNumber: '123',
//         zipCode: 92676,
//         state: 'Califorinia'
//     }
// }
// Object.defineProperty(me, 'name', {
//     writable: false,  //access to the property
//     enumerable: true,  //name is not display
//     value: 'aliseena',  //add value like name
//     configurable: false  // it allows you to delete
// })

// for (const key in me) {
//     console.log(key)
// }

// const me =  {
//     name: 'phil'
// }

// Object.defineProperty(me,'name',{

// })

// const me =  {
    
// }

// Object.defineProperty(me,'name',{
//     value: 'phil',
//     writable: true
// })

// function Person (name, age) {
//     this.name = name,
//     this.age = age,
//     this.rest = function(){
//         return `${this.name} is now tired and resting`
//     }
// }

// const phil = new Person ('phil', 33)

// class Person2 {
//     constructor (name, age){
//         this.name = name
//         this.age = age
//     }

//     rest(){
//         return `${this.name} is now tired and resting`
//     }
// }

// const phil2 = new Person2('phil', 33)

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         return `Hi! my name is ${this.name} and I'm ${this.age}`
//     }
// }

// class Teacher extends Person {
//     constructor(name,age, job) {
//         super(name, age)
//         this.job = job
//     }
// }

// const phil = new Teacher('phil', 33, 'teacher')

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         return `Hi! my name is ${this.name} and I'm ${this.age}`
//     }
// }

// class Teacher extends Person {
//     constructor(name,age, job) {
//         super(name, age)
//         this.job = job
//     }
//     work(){
//         return super.introduce() + '. I am also a teacher that teaches JavaScript'
//     }
// }

// const phil = new Teacher('phil', 33, 'teacher')

// phil.work()
// phil

// function Person(name,age){
//     this.name = name
//     this.age = age
// }

// function Teacher(name,age,job){
//     Person.call(this, name, age)
//     this.job = job
// }

// Teacher.prototype = Object.create(Person.prototype)
// Teacher.prototype.constructor = Teacher

// const phil = new Teacher('phil',33, 'teacher')

// class Person {

//     constructor(name) {
//         this.name = name
//     }
// }

// const phil = new Person('phil')

// class Person {
//  #Name
//  constructor(name) {
//     this.#Name = name
//  }  
 
//  get name() {
//     return this.#Name
//  }
//  set name(userInpute) {
//     if(typeof userInpute === 'number' || userInpute.includes('@')) {
//         console.log('no numbers allowed in username')
//     } else {
//         this.#Name = userInpute
//     }
    
//  }
// }

// const phil = new Person('phil')



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let user = {
//     name: 'john',
//     role: 'admin',
//     access: 'read-write'

//     addUser(){

//     }

//     removeUser(){

//     }
// }



// let john = {
//     name: 'john',
//     birthYear: 1990,
//     gender: 'male'

//     calculateAge(){
//         return 2024 - this.birthYear
//     }
// }





// let employee = {
//     employeeId: 123,
//     salary: 2522,
//     company: acg,
//     calculateSalary(){

//     }
// }

// let Person = {
//     Name: 'john',
//     birthYear: 2000,
//     gender: 'male',
//     calculateAge(){
        
//     }
// }


// let Employee ={
//     name: '',
//     slary: 20,
//     getSalary(){

//     }

// }

// let permenantEmployee ={
//     getSalary(){
//         return 12 * monthlySalary
//     }
// }

// let PartTimeEmployee = {
//     getSalary(){
//         return 12 * Salary
//     }
// }



// function addNumber (x,y) {
//     return x + y;
// }

// function addNumber (x,y,z) {
//     return x + y + z;
// }

// addNumber(10,20)
// addNumber(10,20,30)


// let Person = function(name, gender, birthYear) {
//     this.name = name;
//     this.gender = gender;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function(){
//     let age = new Date().getFullYear() - this.birthYear;
//         console.log(age);
// }

// Person.prototype.city = 'kabul';
// let john = new Person('John', 'Male', 1990);
// console.log(john.hasOwnProperty('name'));
// // john.calcAge();

// let merry = new Person('Merry', 'Femlae', 1988);
// console.log(merry);
// // merry.calcAge();

// let steve = new Person('Steve', 'Male', 1983)
// console.log(steve);
// // steve.calcAge()

// john.__proto__ === Person.prototype

// // let now = new Date();
// // let str = new String();

// let mark = {
//     name: 'Mark',
//     birthYear: 1992,
//     gender: 'Male'
// }   

// console.log(mark.hasOwnProperty('name'))


// mark instanceof Object
// true
// mark
// {name: 'Mark', birthYear: 1992, gender: 'Male'}
// mark.__proto__ === Object.prototype
// true

// JavaScript class
// There are two ways to create a class
// 1. class expression 

// class Person{
//     constructor(name, birthYear, gender) {
//         this.name = name;
//         this.birthYear = birthYear;
//         this.gender = gender;

//         this.calcAge = function(){
//             console.log(new Date().getFullYear() - this.birthYear)
//         }
//     }
// }

// class Person {
//     constructor(name, birthYear, gender) {
//         this.name = name;
//         this.birthYear =  birthYear;
//         this.gender = gender;
//     }

//     calcAge(){
//         console.log(new Date().getFullYear() - this.birthYear)
//     }
// }

// Person.prototype.greet = function(){
//     console.log('Good Morning '+ this.name)
// }

// let john = new Person('John', 1990, 'Male')
// console.log(john)
// john.calcAge()
// john.greet()

// let merry = new Person('Merry', 'Femlae', 1988);
// console.log(merry);




// // 2. class expression

// let Person = class {

// }


// let john = {
//     name: 'john',
//     birthYear: 1990,
//     annualSalary: 20000,

//     get getName(){
//         return this.name;

//     },

//     set setName(val){
//         this.name = val;
//     }

    
// }

// let john = {
//     name: 'john',
//     birthYear: 1990,
//     annualSalary: 20000,

//     get getName(){
//         return this.name;

//     },

//     set setName(val){
//         if(val.length < 4) {
//             alert('Name should be of atlest 4 charachter !.')
//         } else {
//             this.name = val
//         }
//     }

    
// }

// console.log(john.getName)
// john.setName = 'jamshed'
// console.log(john.getName)

// let User = class{
//     constructor(name, pswd, role) {
//         this.name = name;
//         this.password = pswd;
//         this.role = role;
//     }

//     set setPassword(val){
//         if(val.length < 4) {
//             console.log('The Password charachtar should be more than 4 !')
//         } else {
//             this.password = val;
//         }
//     }
// }

// let jamshed = new User ('jamshed', 'pasw123', 'admin')
// console.log(jamshed)
// jamshed.setPassword = 'abc'


// class Person {
//     constructor(name, birthYear, gender) {
//         this.name = name;
//         this.birthYear = birthYear;
//         this.gender = gender;
//     }

//     calcAge(){
//         console.log(new Date(). getFullYear() - this.birthYear)
//     }

//     static greet(){
//         console.log('Hey There ! How are you')
//     }
// }

// let john = new Person('John', 1990, 'Male')
// console.log(john)
// Person.greet()

// let person = {
//     calcAge(){
//         return new Date(). getFullYear() - this.birthYear  // first method
//     },

//     greet(){
//         return'Hey There How are You ?'
//     },

//     init(name, birthYear, gender){    // Third method
//         this.name = name;
//         this.birthYear = birthYear;
//         this.gender = gender;
//     }
// }

// let john = Object.create(person)
// john.name = 'john'
// john.birthYear = 1990
// john.gender = 'male'
// console.log(john)


// let merry = Object.create(person, {  // second method
//     name: {value: 'merry'},
//     birthYear: {value: 1999},
//     gender: {value: 'Female'}
// })
// console.log(merry)
// console.log(merry.calcAge())

// let mark = Object.create(person);
// mark.init('mark', 1993, 'male')
// console.log(mark) 

// //Inheritance between function constructors

// let Person = function(name, gender, birthYear) {
//     this.name = name;
//     this.gender = gender;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function(){
//     let age = new Date().getFullYear() - this.birthYear
//     console.log(age)
// }

// let john = new Person('john', 'Male', 1990)
// console.log(john)

// //employee function constructor

// let Employee = function(name,gender,birthYear,empId,salary){
//     Person.call(this, name, gender,birthYear)
//     // this.name = name;
//     // this.gender = gender;
//     // this.birthYear = birthYear;
//     this.empId = empId;
//     this.salary= salary;
// }

// Employee.prototype = Person.prototype
// Employee.prototype.calcSalary = function(){
//     return this.salary * 12; 
// }

// Employee.prototype.empDetail = function() {
//     console.log(this.name);
//     console.log(this.empId)
// }

// let mark = new Employee('jamshed', 'male', 1994, 101, 25000)
// console.log(mark)

// // Inheritance between classess

// class Person{
//     constructor(name,birthYear,gender){
//         this.name = name;
//         this.birthYear = birthYear;
//         this.gender = gender;
//     }
//     calcAge(){
//         console.log(new Date().getFullYear() - this.birthYear)
//     }
// }

// class Employee extends Person{
//     constructor(name,gender,birthYear,empId,salary){
//         super(name,gender,birthYear);
//         this.empId = empId;
//         this.salary = salary;
//     }

//     calcSalary(){
//         return this.salary * 12;
//     }

//     empDetails(){
//         console.log(this.name);
//         console.log(this.empId)
//     }
// }

// let jamshed = new Employee('jamshed', 'male', 1990, 101, 25000);
// console.log(jamshed)


//Implementing inheritance using object.create

// let person = {
//     calcAge(){
//         return new Date().getFullYear() - this.birthYear
//     },

//     personInit(name, birthYear,gender){
//         this.name = name;
//         this.birthYear = birthYear;
//         this.gender = gender;
//     }
// }
// let employee = Object.create(person);
// employee.employeeInit = function(name,birthYear,gender,empId, salary){
//     employee.personInit.call(this,name,birthYear,gender)
//     this.empId = empId;
//     this.salary = salary;
// }

// console.log(employee)

// let mark = Object.create(employee);
// mark.employeeInit('mark', 1990, 'male', 301, 24000)
// console.log(mark)
let user = {
    name: 'john',
    role: 123,
    access: read-WritableStream,

    addUser(){

    },

    removeUser(){

    }
}

let john = {
    name: 'john',
    birthYear: 1990,
    gender: 'male',

    calcAge(){
        return new Date().getFullYear() - this.birthYear
    }
}

console.log(john)



























































































































































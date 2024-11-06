// function greet(){
//     console.log('hi')
// }

// greet()

// change function to Arrow

// first method

// const greet = () => console.log('hi')
// greet()

// second method

// const greet = () => {
//     console.log('hi')
//     return 5+5
// }

// console.log(greet())

// third method

// const obj = {
//     obj2: {
//         test: ()=> console.log(this)
//     }
// }

// on the internet obj.obj2.test()

// for loop

// const array = [5,6,7,8,9,10, true, 'hi', false, {obj:true}]

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }


// for of loop
// const array = [5,6,7,8,9,10, true, 'hi', false, {obj:true}]

// for (const value of array) {
//     console.log(value)
// }


// function findTotal(item1, item2) {
//     return item1 + item2
// }

// function totalWithTaxes(a,b) {
//     return findTotal(a,b) * 1.10
// }

// console.log(totalWithTaxes(12,9))

// const arr = [1,2,3]

// const newArr = arr.map(val => val + 1)
// console.log(newArr)

// const sum = 2 + 3   
// const obj = {
//     name: 'phillip',
//     age: 33,
//     1: 'one',
//     [sum]: 'five',
//     greet:function(){
//         console.log('hello')
//     }
// }

// // first method
// for(const key in obj) {
//     console.log(obj[key])
// }

// // second method

// console.log(Object.keys[obj])
// console.log(Object.values(obj))

// // on the internet

// 'age' in obj
// 'name' in obj
// obj.hasOwnProperty('age')

// //How to check the properties

// obj.name
// obj['name']
// obj['1']
// 'one'


// const arr = [2,3,4,5,6,7,8,9,10]
// const copy = arr.map(function(value, idx, array){
//     //console.log(idx)
//     return value**2
// })
// // array method
// const mopy = arr.map(value => value**2)
// console.log(copy)

// // function method

// function saquared(num){
//     return num*2
// }

// const copyl = arr.map(saquared)
// console.log(copyl)


// //filter

// // we need prenteses inside the filter because of two value
// const evenNumber = arr.filter(value => value %2 !== 0)
// console.log(evenNumber)

// console.log('start')
// window.confirm('yes or no')

// if (confirm){
//     window.alert('Yes')
// }else{
//     window.alert('no')
// }
// console.log('hi')

// window.setInterval(function(){
//     document.querySelector('h1').textContent++
// }, 1000)

// console.log('hello')

// window.setInterval(function(){
//     console.log('I AM IN THE INTERVEL')
// },4000)

// console.log('done!')


// const myH1 = document.querySelector('h1')
// myH1.addEventListener('click', function(){
//     console.log('clicked')
// })
// console.log('end!')

// const arr = [1,2,3,4,5]
// console.log('begin!')

// arr.map(function(value){
//     console.log(value)
// })
// console.log('end!')


// const arr = [1,2,3,4,5]
// console.log('begin!')

// arr.map(function(value){
//     setTimeout(function(){
//         console.log(value)
//     },1000)
// })
// console.log('end!')


// const pizzaIsGood = true
// const myPromise = new Promise((resolve, reject) => {
//     if (pizzaIsGood) {
//         resolve('yay')
//     } else {
//         reject('ewwwwww')
//     }
// })
// myPromise.then(msg => console.log('yay'))
// myPromise.catch(msg => console.log('ewwwwwww'))
// myPromise.finally(msg => console.log('byeeee'))

// async function add(a,b) {
//     console.log(a+b)
//     return a+b
    
// }
// console.log(add(3,5))


// -------------------

// const delayPromise = new Promise(resolve => setTimeout(()=> resolve('resolved in 2 sec'),5000))

// async function waitingForPromise() {
//     await delayPromise
//     console.log(delayPromise)
// }
// waitingForPromise()


// ------------------

// async function waitingForFetch(){
//     const fetchResult = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const resultOfFetchResponse = await fetchResult.json()
//     console.log(resultOfFetchResponse)
// }

// waitingForFetch()

// const optioObject = {
//     method: 'PATCH'
// }
// window.fetch('https://jsonplaceholder.typicode.com/posts', optioObject)
// window.fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('THERE HAS BEEN AN ERROR MAN !!!!!'))

// async function getUserPosts(userID) {
//     const arrayHolder = []
//     let postCount = 1
//     const fetchResult = await fetch('https://jsonplaceholder.typicode.com/posts')
//                                 .then(res => res.json())
//                                 .then(arrayOfPosts => {
//                                     arrayOfPosts.filter(post => {
//                                         if (post.userID === userID) {
//                                             arrayHolder.push({postNumber: postCount, content: post.body, selectUserID: post.userID})
//                                         }
//                                     })
//                                 })

//       console.log(arrayHolder)
//       return arrayHolder                              
// } 

// getUserPosts(0)

// (function(){
//     console.log('Hey Aliseena Good Morning')
// }) ()

// (()=> console.log ('I am good Dad how are you !')) ()

// (async function (){
//     const endResult = await  fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }) ()

// (async function (){
//     const endResult = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const responsBody = await endResult.json()
//     console.log(responsBody)
// })  

// const bigOrSmall = new Promise((resolve, reject)=> {
//     const randomNumber = Math.random()
//     if (randomNumber < 0.5) {
//         resolve('Yay small number! ' + randomNumber)
//     } else {
//         reject('Big NUMBER! ' + randomNumber)
//     }
// })
// console.log(bigOrSmall)

// ----------------------


// const bigOrSmall = new Promise ((reslove, reject) =>{
//     const randomNumber = Math.random()
//     if (randomNumber < 0.5) {
//         reslove('Yay, small number! ' + randomNumber)
//     } else{
//         reject({message: 'BIG NUMBER!',
//                 number: randomNumber,
//                 author: 'phil'})
//     }
// })
// console.log(bigOrSmall)
// bigOrSmall.then(msg => console.log('I am in the then', msg))
// bigOrSmall.catch(rejectObject => console.log(rejectObject))

//  const isGoodAtMath = true
//  function handleMathSkills (resloveFunction, rejectedFunction){
//     if (isGoodAtMath) {
//         resloveFunction({
//             msg: 'YAY YOU ARE SO GOOD AT MATH! 2+2 = 4'
//         })
//     } else {
//         rejectedFunction({
//             rejectMsg: ' BOO YOU ARE SO TERRIBLE ATE MATH!!'
//         })
//     }
//  }

//  function resolvedFunction(sucessObj){
//     console.log(sucessObj.msg)
//  }
 
//  function rejectedFunction(rejectedObj){
//     console.log(rejectedObj.rejectMsg)
//  }
//  handleMathSkills(resolvedFunction, rejectedFunction)


// const isGoodAtMath =  false

// function handleMathSkills(reslovedFunction, rejectedFunction){
//     if(isGoodAtMath){
//         reslovedFunction ({
//             msg: 'YAY YOU ARE GOOD AT MATH! 2+2 = 4'
//         })
//     }else{
//         rejectedFunction({
//             rejectMsg: 'BOO YOU ARE SO TERRIBLE AT MATH!!'
//         })
//     }
// }

// function reslovedFunction(sucessObj){
//     console.log(sucessObj.msg + ' CONGRATS!')
// }

// function rejectedFunction(rejectedObj){
//     console.log(rejectedObj.rejectMsg)
// }

// handleMathSkills(reslovedFunction, rejectedFunction)
// const isGoodAtMath = false
// function handleMathSkills() {
//     return new Promise((resolve, reject) => {
//         if (isGoodAtMath) {
//             resolve({
//                 msg: 'YAY YOU ARE GOOD AT MATH! 2+2 =4'
//             })
//         } else {
//             reject({
//                 rejectMsg: 'BOO YOU ARE SO TERRIBLE AT MATH!!'
//             })
//         }
//     })
// }

// handleMathSkills().then(successObj => console.log(successObj.msg + 'CONGRATS!'))
// handleMathSkills().catch(failureObj => console.log(failureObj.rejectMsg + 'GO LEARN MORE MATH!'))

// fetch("https://swapi.dev/api/people")
//    .then(res => res.json())
//    .then(peopleObject =>{
//     console.log(peopleObject)
//     const firstThree = peopleObject.results.slice(0,3)
//     document.querySelector('.name-1').textContent += ' ' + firstThree[0].name
//     // document.querySelector('.name-2').textContent += ' ' + firstThree[1].name
//     // document.querySelector('.name-3').textContent += ' ' + firstThree[2].name
//     const firstPersonFirstFilm = peopleObject.results[0].film[0]
//     return firstPersonFirstFilm
//    })
//    .then(firstPersonFirstFilm => fetch(firstPersonFirstFilm))
//                                     .then(res => res.json())
//                                     .then(realData => {
//                                         document.querySelector('.film-1').textContent += realData.title
//                                     })


// const placeHolder = []
// const allPosts = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json)


// const allUsers = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json)   

// const allTodos = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json)   
    
    
// Promise.all([allPosts, allUsers, allTodos]).then(result => console.log(result))


// ///////////////////////////youtube video learning \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// Synchronous means the code runs in a pariticilar sequence of instruction given in the program. each instruction waits for the previous instruxtion to complete its exexution

// console.log('one')
// console.log('two')
// console.log('three')

// Asynchronous due to synchronous programming, somthing imp instruction get blocked due to some previous instruction which causes a delay in the UI Asynchrounous code exucution allows to execute next instruction immediately and doesnt block the flow
// function greet(){
//     console.log('hello')
// }
// setTimeout(greet, 10000)

// console.log('four')
// console.log('one')
// setTimeout(()=> {
//     console.log("hello")
// }, 4000)
// console.log('two')
// console.log('three')

// CallBacks A callbacks is a function passed as n argument to another function.

// function sum (a,b){
//     console.log(a+b)
// }

// function calculator(a,b, sum){
//     sum(a,b)
// }

// calculator(1,2, sum)  // first method

// calculator(1,2, (a,b)=> {  //second method
//     console.log(a+b)
// })

// Callback Hell: nesetd callbacks stacked below one another forming a pyramid structure
// nesting

// let age = 70;
// if(age>18){
//     if(age>60){
//         console.log('senior')
//     } else {
//         console.log('middler')
//     }
// } else {
//     console.log('child ')
// }

// for (let i = 0; i < 5; i ++) {
//     let str = '';
//     for (let j=0; j<5; j++) {
//         str = str + j
//     }
//     console.log(i,str)
// }

// callbacks hell

// function getData(dataID, getNextData, getData3){
//     setTimeout(()=> {
//         console.log("data", dataID)
//         if(getNextData){
//             getNextData()
//         }
//     }, 1000)
// }

// getData(1, ()=> {
//     console.log("getting data2 ....")
//     getData(2, ()=>{
//         console.log("getting data3 ....")
//         getData(3,()=>{
//             console.log("getting data4 ....")
//             getData(4)
//         })
//     });
// });

// ON THE INTERNET getData(12230)


// Promise is for "eventual" completion of task. it is an object in JS it is a solution to callback hell
// In promise we have three stat  1 - pending 2- fulfilled 3- rejected
// fullfiled meaning RESOLVED

// let promise = new Promise ((resolve, reject)=>{
//     console.log("I am a promise")
//     resolve("sucess")
//     reject('not accepted')
// })

// function getData(dataId, getNextData){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=> {
//           console.log("data" ,dataId)
//           resolve("sucess")
//           if(getNextData) {
//             getNextData()
//           }
//         }, 5000)
//     })
// }

// on the internet let promise = getData(123)

// const getPromise = () =>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am a promise")
//         resolve("success")
//         // reject("error")
//     },2000);
// }
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled", res)
// });
// promise.catch((err)=>{
//     console.log('rejected', err)
// }
// )


// promise chaning 

// function asynFunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("some data1")
//             resolve("success")
//         },4000)
//     })
// }

// function asynFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("some data2")
//             resolve("success")
//         },4000)
//     })
// }

// first method

// console.log("fetching data1")
// let p1 = asynFunc1();
// p1.then((res)=>{
//     console.log("fetching data2")
//     let p2 = asynFunc2();
//     p2.then((res)=>{
//     })
// })

// second method

// console.log("fetching data1")
// asynFunc1().then((res)=>{
//     console.log("fetching data2")
//     asynFunc2().then((res)=>{})
// })


// function getData(dataId, getNextData){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=> {
//           console.log("data" ,dataId)
//           resolve("sucess")
//           if(getNextData) {
//             getNextData()
//           }
//         }, 2000)
//     })
// }

// getData(1).then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//     return getData(3)
// })  
// .then((res)=>{
//     console.log(res)
// })

// Async - Await = always return a promise == await pauses the excution of its surrounding async function until the promise is settled

// async function hello(){
//     console.log("hey how are you")
// }

// on the internet hello()

// Await

// function api(){
//     return new Promise((reslove, reject)=>{
//         setTimeout(()=>{
//             console.log('weather data');
//             reslove(200)
//         },3000)
//     });
// }

// async function getWeatherData(){
//     await api()
//     await api()
// }

// on the internet getWeatherData()


// Async-Await

// function getData(dataId, getNextData){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=> {
//           console.log("data" ,dataId)
//           resolve("sucess")
//           if(getNextData) {
//             getNextData()
//           }
//         }, 2000)
//     })
// }

// async function getAllData(){
//     console.log("getting data 1....")
//     await getData(1)
//     console.log("getting data 2....")
//     await getData(2)
//     console.log("getting data 3....")
//     await getData(3)
// }

// on the internet getAllData()



// IIFE: Immediately Invoked Function Expression :::: is a funtion that is called immediately as soon as it is defined.
// function getData(dataId, getNextData){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=> {
//           console.log("data" ,dataId)
//           resolve("sucess")
//           if(getNextData) {
//             getNextData()
//           }
//         }, 2000)
//     })
// }


// (async function (){
//     console.log("getting data 1....")
//     await getData(1)
//     console.log("getting data 2....")
//     await getData(2)
//     console.log("getting data 3....")
//     await getData(3)
// })();

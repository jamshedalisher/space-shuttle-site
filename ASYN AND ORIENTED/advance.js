// lesson 1 ==

// Concurrency Introduction == Concurrency in JavaScript refers to the ability to handle multiple tasks seemingly simultaneously, even though JavaScript is single-threaded.

// calback sample example  == Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function


// console.log('greet')
// function greeting (){
//     console.log('hey whats up')
// }
// greet1(greeting)
// function greet1 (callBack){
//     callBack();
// }
// setInterval(greeting,500)
// console.log('greet2')

// on the internet greet1(greeting)

// promisess == A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It is used for handling asynchronous operations, such as making API calls or reading files, in a more organized and readable way. Promises have three states:


// const pro1 = Promise.resolve('hello')
// pro1.then((value)=> {
//     console.log(value)
// })

// const pro2 = new Promise((value,reject)=>{
//     console.log("hello, world")
// })
// pro2.then((value)=>{
//     console.log(value)
// })

// const pro3 = new Promise ((resolve, reject)=>{
//     const val = 50
//     if(val > 50) {
//         resolve(val)
//     } else{
//         reject('Low Value!')
//     }
// })

// pro3.then((outPut)=> {
//     console.log(outPut)
// },(error)=> {
//     console.log(error)
// })
// let counter = 0;
// const pro4 = new Promise((resolve,reject)=>{
//     // resolve('ready')
//     reject('error')
// }).then(value =>{
//     counter++;
//     console.log(value);
//     return `next step ${counter}`;
// }).then(value =>{
//     counter++;
//     console.log(value);
//     return `next step ${counter}`;
// }).then(value =>{
//     counter++;
//     console.log(value);
//     return `next step ${counter}`;
// }).catch(err=>{
//     console.log(err)
// });

// lesson 2 ==

// Fetch Method get File == 

// const url = 'html3.html';
// const eleH1 = document.querySelector('h1');
// const output = document.querySelector('.output');

// eleH1.addEventListener('click', fileData);

// function fileData() {
//    fetch(url)
//       .then((response) => {
//          console.log(response);
//          if (response.status == 200) {
//             return response.text();
//          }
//       })
//       .then((data) => {
//          eleH1.innerHTML += data;
//          output.textContent = data;
//       });
// }


// Lesson3 ==

// JavaScript Data as JSON and JavaScript Objects

// const eleH1 = document.querySelector('h1');
// const outPut = document.querySelector('.outPut');

// eleH1.addEventListener('click', ()=> {
//     fetch('my4.json').then(res=> res.text()).then(data => {
//         console.log(data)
//     })
// })
// object Review

// const myObj1 ={
//     first: 'Laurence',
//     "last": "Svekis",
//     id : 10
// };

// console.log(myObj1);
// Arrays Review

// const arr = ['laurence','Svekis', 10, myObj1];
// console.log(arr);

// see object properties
// const str = 'id'
// console.log(myObj1.first);
// console.log(myObj1['first']);
// console.log(myObj1['last']);
// console.log(arr['3'].id);
// console.log(arr['3']['id']);
// console.log(arr[3][str])

// Lesson 4 ==
// JSON Parse and Stringify Methods

// const eleH1 = document.querySelector('h1')
// const outPut = document.querySelector('.outPut');
  
// eleH1.addEventListener('click',fun2);
// const url = 'my4.json';

// function fun1(){
//     fetch(url)
//     .then(res => res.text())
//     .then(data => {
//         outPutter1(data)
//     })
// }

// function fun2(){
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         outPutter2(data)
//     })
// }

// function outPutter1(val){
//     const Obj1 = JSON.parse(val)
//     outPut.textContent = `${Obj1.first} ${Obj1.last}`
// }


// function outPutter2(val){
//     const Obj1 = JSON.stringify(val)
//     outPut.textContent = Obj1
// }



// Lesson 5 ==

// Looping Through Data in JSON

// const eleH1 = document.querySelector('h1');
// const outPut = document.querySelector('.outPut');
// const url = 'my4.Json'

// eleH1.addEventListener('click', data1)

// function data1(){
//     fetch(url)
//     .then(res => res.json())
//     .then(data=> {
//         out1(data)
//     })
// }

// function out1 (arr){
//     arr.forEach((ele,idx,Array)=>{
//         outPut.innerHTML += 
//         `<div>${ele.first}
//          ${ele.last} 
//          ${ele.id}</div>`
//     })
// }

// second method with random math  

// function out1(arr){
//     const ran = Math.floor (Math.random()*arr.length)
//     const val = arr[ran]
//     console.log(val)
//     arr.push(val)
//     arr.forEach((ele,idx,Array)=>{
//         outPut.innerHTML += `<div> ${ele.first} ${ele.last} ${ele.id}</div>`
//     })
// }

// Lesson 6 ===


// Async and Await

// const ele1 = document.querySelector('h1');
// const outPut = document.querySelector('.outPut')
// outputData()

// async function outputData(val){
//     const myOutPut = new Promise((resolve)=>{
//         setTimeout(()=> {resolve('Jamshed Ali Sher');},
//         4000)
//     })
//     outPut.textContent = await myOutPut
// }

// function greeting (delay){
//     return new Promise((resolve)=>{
//         setTimeout(()=> {resolve('Jamshed Ali Sher'
//         + delay);},
//         delay)
//     })
// }

// async function welcome(delay){
//     const val = await greeting (delay);
//     outPut.textContent = val
//     console.log(val)
// }

// welcome(1000)
// welcome(2000)
// welcome(3000)
// welcome(4000)

// Lesson 7 ==

// Async and Await files catch errors

// const titleElement = document.querySelector('h1');
// const output = document.querySelector('.output');

// titleElement.textContent = 'Click Me';

// const url = 'my5.json';

// titleElement.addEventListener('click', getFileValue);

// async function getFileValue() {
//     const response = await fetch(url);
//     const data = await response.json();

//     output.innerHTML = `<div>${data.first} ${data.last}</div>`;
//     testOutput();
// }

// async function testOutput() {
//     try {
//         let response = await Promise.resolve('Hello');

//         if (!response) {
//             throw new Error('Error oh no');
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// runFunctions();

// async function runFunctions() {
//     await functionOne();
//     functionTwo();
//     await functionThree();
// }

// async function functionOne() {
//     console.log('one');

//     let promise = new Promise(resolve => setTimeout(() => resolve('five'), 5000));
//     const value = await promise;
//     console.log(value);
// }

// function functionTwo() {
//     console.log('two');

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log('four');
//             return data;
//         });
// }

// async function functionThree() {
//     let response = await Promise.resolve('three');
//     console.log(response);
// }


// Lesson 7 ==

// Promise All JavaScript == 

// const titleElement = document.querySelector('h1');
// const output = document.querySelector('.output');

// titleElement.textContent = 'Click Me';
// titleElement.addEventListener('click', getData);

// const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'Hello'));
// const promise2 = new Promise(resolve => setTimeout(resolve, 1000, 'world'));
// const promise3 = 'Laurence Svekis';
// const promise4 = Promise.resolve('JavaScript');

// const urls = ['my4.json', 'my5.json', 'my6.json'];

// function getData() {
//     console.log('ready');

//     const requests = urls.map(url => fetch(url).then(response => response.json()));

//     Promise.all(requests).then(displayData);
// }

// function displayData(dataArr) {
//     dataArr.forEach(data => {
//         output.innerHTML += `<div>${data.first} ${data.last} ${data.greet}</div>`;
//     });
// }

// function getDataSingleUrl() {
//     console.log('ready');

//     const promiseSingleUrl = fetch(urls[0]).then(response => response.json());

//     Promise.all([promiseSingleUrl]).then(dataArr => {
//         dataArr.forEach(data => console.log(data));
//     });
// }

// function getDataFromPromises() {
//     console.log('ready');

//     Promise.all([promise1, promise2, promise3, promise4]).then(displayPromisesData);
// }

// function displayPromisesData(dataArr) {
//     dataArr.forEach(data => {
//         output.innerHTML += `<div>${data}</div>`;
//     });
// }

// Lesson 7 == 

// Web API connection ==

// const eleH1 = document.querySelector('h1');
// const outPut = document.querySelector('.outPut');
// const btn = document.querySelector('button')
// const myInupt = document.querySelector('input')
// btn.addEventListener('click', gData);
// const url = 'https://randomuser.me/api/?results=';

// function gData(){
//     console.log(myInupt.value)
//     const urlNew = `${url}${myInupt.value}`
//     console.log(urlNew)
//     fetch(urlNew)
//     .then(rep=> rep.json())
//     .then(data=>{
//         outPutData(data.results)
//     })
// }

// function outPutData(arr){
//     arr.forEach((person)=>{
//         createRecord(person)
//     })
// }
// function createRecord(person){
//     console.log(person.name.title);
//     console.log(person.name.first);
//     console.log(person.email);
//     console.log(person.dob.age);
//     const record = maker(' ', 'div', outPut);
//     record.style.border = '0.1px solid red';
//     const html1 = `${person.name.title} ${person.name.
//     first} ${person.name.last}`;
//     maker(html1,'div', record,)
//     const html2 = `${person.dob.age} ${person.email}`
//     maker(html2,'div', record,)
    

// }
// function maker (elHTML,elType,elParent){
//     const ele = document.createElement(elType);
//     elParent.append(ele)
//     ele.innerHTML= elHTML;
//     return ele
// }


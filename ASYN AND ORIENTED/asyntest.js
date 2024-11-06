// //Write a function that fetches data from a public API using fetch() and handles both the resolved and rejected states using .then() and .catch().


// // https://jsonplaceholder.typicode.com/users

// window.fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => console.log(data))


// async function add (a,b){
//     console.log(a+b)
//     return a+b
// }
// console.log(add(3,5))

// const delayPromise = new Promise
// (resolve => setTimeout(() => resolve ('resolve in 2 second'), 2000))
// async function waiting (){
//     await delayPromise
//     console.log(delayPromise)
// }
// waiting()

// window.fetch('')
// .then(res => res.json())
// .then(data => console.log(data))

// const pizaShop = true
// const myPizza = new Promise((reslove, reject)=> {
//     if (pizaShop) {
//         reslove('yes')
//     } else {
//         reject('no')
//     }
// })
// myPizza.then(msg => console.log('yes'))
// myPizza.catch(msg => console.log('no'))
// myPizza.finally(msg => console.log('byee'))

// const promise1 = Promise.resolve("Success 1");
// const promise2 = Promise.reject("Error 2");
// const promise3 = Promise.resolve("Success 3");

// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => {
//     results.forEach((result, index) => {
//       if (result.status === "fulfilled") {
//         console.log(`Promise ${index + 1} fulfilled: ${result.value}`);
//       } else if (result.status === "rejected") {
//         console.log(`Promise ${index + 1} rejected: ${result.reason}`);
//       }
//     });
//   });
// Making API Requests - GET
// API Key is a unique idenfier used to authenticate user or developer to an API

// const main = document.querySelector('main')

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(respone => respone.json())
//   .then(data => {
//     const img = `<img src ="${data.message}" alt="random dog image"`
//     main.insertAdjacentHTML('afterend', img)
//   })


// const main = document.querySelector('main')

// fetch("https://dog.ceo/api/breed/hound/images/random/3")
//   .then(response => response.json())
//   .then(data => {
//     const images = data.message.map(
//         img => `<img src="${img}" alt="Random Dog Breed">`
//     ).join("");
//     main.insertAdjacentHTML("beforeend", images)
//   })

// const jsonString = `{
//     "name": "jamshed",
//     "occupation": "developer",
//     "age": 31,
//     "isAwseome": "true"
// }`

// const jsonObj = JSON.parse(jsonString)
// console.log(jsonObj.occupation)

// const objString = {
//     name: "jamshed",
//     occupation: "developer",
//     age: 31,
//     isAwseome: true
// }

// const jsonStrngi = JSON.stringify(objString)
// console.log(typeof jsonStrngi)


// Get a resource

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// // create a resource

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'Jamshed Ali Sher',
//       body: 'This is Ali Sher posts.',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// // update a resource

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 1,
//       title: 'Aliseena Maqbool Poem',
//       body: 'I love Aliseena Jan',
//       title: 'Jegargosha',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// // delete a resource

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
//   })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// Headers:{
//     'content-type': 'application/json; charset=UFT-8',
//     'Authorization': `bearer $`
// }

// const main = document.querySelector("main")

// fetch('https://dog.ceo/api/breed/australian/images/random/5')
//    .then(response => response.json())
//    .then(data=>{
//     const images = data.message.map(img => `<img src="${img}" alt "Random dog breed>`)
//     .join ("");
//     main.insertAdjacentHTML('beforeend', images)
//    })


// const main = document.querySelector("main")

// fetch('https://dog.ceo/api/breed/australian/images/random/5')
//    .then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`)
//     }
//     return response.json()
//    })

//    .then (data=>{
//     const images = data.message.map(img=>`<img src"${img}" alt = "Random dog breed">`)
//     .join("")
//     main.insertAdjacentHTML('beforeend', images)
//    }).catch(error=>{
//     console.log("There was a poblem with the fetch: " +error.message)
//    })



// const main = document.querySelector('main')
// const poke = "https://pokeapi.co/api/v2/pokemon-species";

// async function fetchData (url){
//     try{
//       const response  = await fetch(url);
//       if(!response.ok){
//         throw new Error(`HTTP erro ! Status: ${response.status}`)
//       }
//       const data = await response.json()
//     //   console.log(data)
//     //   renderData(data);
//       renderSpecies(data)
//     } catch (error){
//         console.log("There is a poblem with your fetch", error)
//     }
// }
//  fetchData(poke)

// function renderData(data){
//     const html = `<h2>${data.name}</h2>
//     <p>ID: ${data.id}</p>
//     <p>Abilities ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name} </p>`;
//     main.insertAdjacentHTML("beforeend",html)
// }

// function renderSpecies(data){
//     const listItems = data.results.map(item=>`<li>${item.name}</li>`).join("")
//     const html = `
//     <h2>Pokemonn Species</h2>
//     <ul>${listItems}</ul>`;
//     main.insertAdjacentHTML("beforeend",html)
// }

const main = document.querySelector("main");
const apodEl= document.querySelector(".apod")
const roverList = document.querySelector(".rover-list")
const errorMsg = document.querySelector(".error-msg")
const dateInpute = document.querySelector("#date-input")
const submitButton = document.querySelector("#submit-button")
const apiKey = "gdXz79swPQnnRwv3nwNI9tghBcLvtjdvBSUjnX73"


const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`


async function fetchData(url, handleData){
    try{
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error (`HTTP error ! Status: ${response.status}`)
        }

        const data = await response.json();
        handleData(data);
    } catch (error){
        errorMsg.style.display = "block"
        errorMsg.innerHTML ="There is a problem with your fetch:" + error
    }
}

function handleApodData(data){
    const html = `
    <img src="${data.url}" alt="apod">
    <p>${data.title}</p>
    `;
    apodEl.insertAdjacentHTML('beforeend',html)
}

function handleRoverData(data){
    roverList.innerHTML =""
    if (!data.photos.length){
        roverList.innerHTML = "<li>No photos were taken on this date. Please select another date.</li>";
    }else{
        const photos = data.photos 
        .map(photo => `<li><img src="${photo.img_src}" alt="Rover photo"</li>`)
        .join("");
        roverList.insertAdjacentHTML("beforeend", photos)
    }
}

fetchData(apodUrl, handleApodData)

submitButton.addEventListener('click', function(){
    roverList.innerHTML ="Loading..."
    const date =dateInpute.value 
      ? dateInpute.value 
      : new Date().toISOString().slice(0, 10)
    const roverUrl =`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`
    fetchData(roverUrl, handleRoverData)
})
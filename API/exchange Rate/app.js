const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api";

  const dropdowns = document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("form button")
  const fromCurr = document.querySelector('.from select')
  const toCurr = document.querySelector('.to select')


for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD"){
            newOption.selected = "selected"
        } else if (select.name === "to" && currCode === "AFN") {
            newOption.selected = "selected"
        }
        select.append(newOption)
    }

    select.addEventListener("change", (evt)=>{
        updateFlage(evt.target)
    })
}

const updateFlage = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode]
    console.log(currCode)
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img")
    img.src = newSrc;

}

btn.addEventListener('click', async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input")
    let amVal = amount.value
    if (amVal === "" || amVal < 1) {
        amVal = 1;
        amount.value = "1"
    }
    // console.log(fromCurr.value,toCurr.value)
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/ ${toCurr.value.toLowerCase()}.json`
    let respose = await fetch(URL)
    console.log(respose)
})





















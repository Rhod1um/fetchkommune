console.log("jeg er i dropdown 2")

//henter html elementerne
const pbFillDropdown = document.getElementById("pbFillDropDown")
//hvorfor getElemenet frem for query selector? Husk at tjekke at alt fungere
//man kan sagtens bruge query selector med id. Erik havde kun brugt get element fordi han troede
//man skulle get element hvis man bruger id'er og query hvis man bruger classes
const ddFruits = document.querySelector("#ddFruits")

//lav array:
const fruits = []

//put objekter ind i array:
fruits.push({"id":1, "name":"æble"})
fruits.push({"id":2, "name":"pære"})

//udskriv fruits
console.log(fruits)

//lav event listener for trykknappen. Drop down er både

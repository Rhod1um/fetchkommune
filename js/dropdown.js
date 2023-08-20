console.log("jeg er i dropdown")

const fruits = [] //arraylist

fruits.push({"id": 1, "name":"æble", "style":"fruit"}) //tuborg laver objekt som lægges i arrayet
//style er til hvis man har css? Kan have forretningsregel som sætter farven baseret på at et property er noget bestemt

fruits.push({"id": 2, "name":"pære", "style": "fruit"}) //objekterne er json. man behøver vist ikke gåseøjne om ting men
//man gør det meget ofte
fruits.push({"id": 3, "name":"peanut", "style":"nut"})
fruits.push({"id": 4, "name":"appelsin", "style":"fruit"})
//man henter dette fra databasen og der står måske ikke style, der står produkttype og vi vælger så
//at lave styles til det og hvordan det skal præsenteres
//senere laves en fruit style og en nut style

console.log(fruits)

const pbFillDropDown = document.getElementById("pbFillDropDown")
const ddFruits = document.getElementById("ddFruits")

function addFruitToDropdown(item){
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item.name
    ddFruits.appendChild(el)
    //når bruger vælger objekt i drop down skal hun få det. Får kun id til start
    //el.value = item.id   //putter id i value
    el.value = item //putter hele objektet i value så vi får hele objektet senere når vi vælger
    //nej value skal være streng, det skal være id, så skal man finde objektet ud fra det bagefter
    el.className = item.style //adder css style til class list så html elementet får den style
    //man skal ikke lave iffer på om det er en frugt eller nut så skal den have den style. classname/list
    el.classList.add(item.style) //gør det samme som className
    //i objekterne bør der ikke stå style, det er "snyd", der skal stå produkttype fx, og så skal man
    //konvertere det til en bestemt style alt efter hvad det er
}

function fillDropDown(){  //puttes på trykknap
    fruits.forEach(addFruitToDropdown) //foreach til array
}

//funktion som kaldes når vi vælger ting i dropdown
function selectFruit(){
    //kan kaldes med event men det gør vi ikke her
    const selindex = ddFruits.selectedIndex
    const selectedFruit = ddFruits.options[selindex] //får fat i linjen som vælges
    console.log(selindex)
    console.log(selectedFruit)
    console.log(selectedFruit.value) //jsn stringify
}

pbFillDropDown.addEventListener('click', fillDropDown)
ddFruits.addEventListener('change', selectFruit) //change kaldes når hun vælger en linje
console.log("vi er i fetch kommuner")

//kopier url fra browser:
const urlKommuner = "https://api.dataforsyningen.dk/kommuner"

//vi laver ikke html på det her til at starte med. så behøver vi ikke en browser

function fetchKommuner(url){ //før tog den urlKommune, nu tager den url og urlkommune lægges ind som argument
    console.log("2222 fetch kommuner")
    //return fetch(urlKommuner).then(response => response.json())
    return fetch(url).then(response => response.json())  //bruger vi rigtig meget, Promise<Response>, mystisk
    //response er bare en variabel, vi får response som vi får ud i json
    //man sætter paranteser om det første repsonse hvis der er flere argumenter
    //husk paranteser efter json!! virkede ikk først fordi det manglede
    //åben promimse objektet under inspect og se arrayet med kommuner
    //added consoole log i lamdba funtion, det gøres til sidst, efter fetch er sket

    //ting sker: 1, 2 ,3, promise, 4, asynkront er specielt for promise
    //1 kalder fetchKommuner så 2 udskrives, den henter kommuner men det tager tid så den går videre,
    //så tilbage til actionFetch og udskriver 3, så er fetch færdi og udskriver promise objekt og
    //så sker 4
}

async function showAllKommuner(url){
    const kommunelist = await fetchKommuner(url)
    console.log(kommunelist) //uden await fik vi promise objekt men her får vi json
    kommunelist.forEach(showKommune)
    kommunelist.forEach(addKommunneDropdown)
}

function showKommune(i){
    console.log(i)
}

function actionShowKommuner(){ //for erik så skriver han action i funktion hvis det puttes på noget aktiv
    //html såsom en knap
    showAllKommuner(urlKommuner)
}

function actionFetch(){
    console.log("1111 action fetch")
    const kommuner = fetchKommuner(urlKommuner)
    //vi skal bruge async og await så vi når at få kommunerne før vi går videre hertil
    console.log("333 done fetch")
    console.log(kommuner) //det her giver ikke menig da den er tom når det udskrives fordi fetch køre imens
    //og ikke har hentet kommunerne endnu
    //den skrive promise<pending> som betyder den ikke er færdig med at hente
}

const pbFetchKommuner = document.querySelector("#pbFetch")
pbFetchKommuner.addEventListener('click', actionShowKommuner)

//javascript køre i én tråd
//fetch henter i skyen, det tager tid, når det er tilbage sker .then(lambda... til json)
//asynkront, linje 15 sker først hvor den er tom fordi det ikke er hentet endnu
//den får det så senere og det er et promise objekt

const dropdown = document.querySelector("#dropdown")
dropdown.addEventListener('click', fillDropDown)
dropdown.addEventListener('change', selectKommune)

function selectKommune(){
    const selindex = dropdown.selectedIndex
    const selectedKommune = dropdown.options[selindex] //får fat i linjen som vælges
    console.log(selindex)
    console.log(selectedKommune)
    console.log(selectedKommune.value) //jsn stringify
}

function addKommunneDropdown(item){  //puttes på trykknap
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item.name
    dropdown.appendChild(el)
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


//const sov = (ms) => { er den samme som nedenunder
function sov(){
    return new Promise(dummyFunction => setTimeout(dummyFunction, ms))

    //ms miliekunder
    //prommise er et specielt objekt man kan give en funktion
    //den udføre funktionen som tager noget tid og den går videre asynkront
    // og hvis det går dårligt gør du det ene og godt så gør noget andet
}

async function doSomethingAsync(){  //ved fetch skal man få den til at vente til den har fået data da
    //den ikke skal gå videre med variable uden de er fyldt ud med data
    console.log("1111")
    await sov(2000)
    console.log("2222 færdu med sov")
} //

console.log("start 1")
doSomethingAsync()
console.log("5555 slut")
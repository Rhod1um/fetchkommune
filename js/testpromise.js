console.log("vi er i test promise")

//laver funktion som pføre sig som fecth med delay/asyjkront

function returnNewPromise(){
    return new Promise(function (resolve, reject) {
        resolve("start of new promise")
    })  //laver funktion inde i promise obkekt konstruktor
}

function test(){
    return returnNewPromise().then(value => {
        console.log("1st, then inside test():" + value)
        return "hello"
    }).then(value => {
        console.log("2st then inside test()" + value) //man kan blive ved med at skrive .then
        return "world"
    })
}

test().then(value => {
    console.log("test er færdig, vi fortsætter" + value)
})

console.log("slut med test")
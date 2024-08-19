const user = {
    name: "Uli",
    lastname: "Muller",
    age: 32,
    mal: "tumama.cpom",
    active: true
}

let usrInfoHtml = document.getElementById("usr");

function logearUsuario() {
    usrInfoHtml.innerText = `${user.name} ${user.lastname}`
}

logearUsuario();

let usrStateHTML = document.getElementById("usr-check");

function setUserState() {
    if(user.active){
        usrStateHTML.innerText="👌"
    } else {
        usrStateHTML.innerText="🧙‍♂️"
    }
}

setUserState();

function ejercicioConsola(){
    const cantGatos = prompt("Ingrese cantidad de gatos: ");
    if (parseInt(cantGatos)) {
        const emojis = ["😺","😸","😿"]
        for (let gato = 1; gato <= cantGatos; gato++) {
            console.log(`Gato ${gato}: ${emojis[(gato-1)%emojis.length]}`)      
        }
    }
}

function ejercicioHtml(){
    let frase = "a a aaa"
    let letraBuscada = prompt("ingrese la letra que quiere buscar")
    if (letraBuscada.length === 1) {
        frase = frase.toLocaleLowerCase();
        letraBuscada = letraBuscada.toLocaleLowerCase();
        let contador =  0;

        for (let posicion = 0; posicion < frase.length; posicion++) {
           if(frase[posicion] === letraBuscada){
            contador++;
           }
        }
        console.log(`La letra ${letraBuscada} aparece ${contador} `)
        let mensajeback = document.getElementById("mensaje");
        mensajeback.innerText = `La letra ${letraBuscada} aparece ${contador}  👌`
    }

}
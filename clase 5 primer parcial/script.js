const users = [{
    name: "Maria",
    lastname: "Perez",
    age: 32,
    email: "superadmin@gmail.com",
    role: "super-admin",
},{
    name: "Juan",
    lastname: "Perez",
    age: 25,
    email: "admin@gmail.com",
    role: "admin",
},{
    name: "Nicolas",
    lastname: "Macchioli",
    age: 32,
    email: "user@gmail.com",
    role: "user",
}]
let userLogeado = "admin"
function loginUser(){
    mailIngresado = prompt("ingrese un mail");
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === mailIngresado) {
            getNombre = document.getElementById("UserName");
            getNombre.innerText = users[i].name +" "+ users[i].lastname
            setUserRole(users[i].role);
        }
    }
}
loginUser()
 function cambiarnombre(){
    getNombre = document.getElementById("UserName");
    getNombre.innerText = users[2].name
 }
 function setUserRole(user){
    getFlotante = document.getElementById("flotante")
    if (user === "admin") {
        getFlotante.innerText = "🔑";
    } else { if (user === "super-admin") {
        getFlotante.innerText = "🚀";
    } else {
        getFlotante.innerText = "👽";
    } }
    
 }
 function ejeConsola(){
    const cantidadClientes = parseInt(prompt("ingresa la cantidad de clientes"))
    const cantidadProductos = parseInt(prompt("cantidad de productos"))
    let emojis = ""
    for (let cliente = 0; cliente < cantidadClientes; cliente++) {
        for (let productos = 0; productos < cantidadProductos; productos++) {
            emojis += "🎁"
        }
        if (cliente %2) {
            console.log("Usuario " + (cliente+ 1) + " 👨‍🦳" + emojis);
        } else {  console.log("Usuario " + (cliente+1) + " 👩‍🦳" + emojis);}
        emojis = ""
    }
 }
let letrasIngresadas = ""
function ejeHtml() {
    let letra = prompt("ingresa una letra")
    letrasIngresadas += letra;
    let contador = 0
    for (let i = 0; i < letrasIngresadas.length; i++) {
        if (letrasIngresadas.matchAll === letra) {
            contador++
        }
    }
    console.log(contador)
 }
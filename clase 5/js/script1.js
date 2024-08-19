const usuario = {
    nombre: "facu",
    apellido: "sosa",
    activado: true
}

function prueba1(){
    console.log("hola?");  
} 

let cargarNombre = document.getElementById("nombre-cargar")

function logearusuario(){
    cargarNombre.innerText = usuario.nombre + " " + usuario.apellido
}
logearusuario()

function ingresarDaton(){
    const ingresarDatos = prompt("gola")
    if(parseInt(ingresarDatos)){
        let sumar = parseInt(ingresarDatos) + 1
        console.log(sumar);
    }
}

console.log("Hablar por cmd")
document.getElementById("cargar-id") //!cargar elemento
.innerText = "sustitulle tag en pantalla"
prompt("hacer llamado al usuario pa que ingrese algo")
parseInt()
toLowerCase()



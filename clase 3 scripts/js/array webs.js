
function darSaludoBienvenida(){
    const usr = prompt("ingrese su nombre");
    alert("hola bienvenido " + usr)
    console.log("Funcion finalizada")
}

let alumnos = [];
function cargarAlumno(){
    let nuevoAlumno = prompt("ingrese nuevo alumno");
    //pasar el nombre del alumno a mayusculas
    nuevoAlumno = nuevoAlumno.toUpperCase();
    alumnos.push(nuevoAlumno)
    pintarAlumnos();
}

function pintarAlumnos() {
    document.getElementById("listaAlumnos").innerText = alumnos;
}
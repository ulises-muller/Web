const dateHTML = document.querySelector("#date")

const nombresDiasSemana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]

let nombresMeses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto",
    "septiembre","octubre","noviembre","diciembre"]

// bienbenido, hoy es ___. _ de ___ de ___

function setClock(){
    const fecha = new Date()

    const hora = formatClockValue(fecha.getHours());
                                    //* condicion ? si es verdadero : si es falso
    const minutos = fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes() 
    const segundo = formatClockValue(fecha.getSeconds())

    const horaHTML = document.getElementById("hora")
    const minutosHTML = document.querySelector("#minutos")
    const segundoHTML = document.getElementById("segundos")

    horaHTML.innerText = hora
    segundoHTML.innerText = segundo
    minutosHTML.innerText = minutos
    
    
    //!Mensaje reloj
    const nombreDiaSemana = nombresDiasSemana[fecha.getDay()]
    const nombreMes = nombresMeses[fecha.getMonth()]

    const dia = fecha.getDate()
    const year = fecha.getFullYear()

    dateHTML.innerText = `Bienvenido, hoy es ${nombreDiaSemana}, ${dia} de ${nombreMes} del ${year}`
    
}

setClock()

setInterval(()=> {
    setClock();
}, 1000)


function formatClockValue(value){
    if(value<10){
        return "0" + value;
    } 
    return value
}
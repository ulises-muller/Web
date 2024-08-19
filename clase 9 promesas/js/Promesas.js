// window.addEventListener("load", () => {
//     console.log("todos los elementos se han cargado")
// })

// console.log("log de consola");

// console.time("sync")

// const iva = 1.21

// const dolar = 990

// const user = "John doe"

// console.log(products);

// console.log(iva*dolar);

// console.timeEnd("sync");

// console.time("prod")

// let productos;

// setTimeout(() => {
//     const products =[{
//         id: 1,
//         name: 'laptop',
//         price: 1200
//     },{
//         id: 2,
//         name: 'manzana',
//         price: 12
//     }]

// }, 2000);

// console.log("Productos ", productos)

// console.timeEnd("prod")
//!empieza la promesa
console.time("prod")

let productos = []

const buttons = document.querySelectorAll(".btn")

//*algo sale bien o sale mal
const promesa = new Promise((resuelta, rechazada) => {

    buttons.forEach(btn => {

        btn.addEventListener("click", evento => {
            const borrar = evento.currentTarget.dataset.borrar
            console.log("Se apreto un boton");

            if(borrar){
                resuelta("Productos eliminados")
            }else{
                rechazada()
            }
        })
    })
})
//.then "esta aceptada" hago algo 
//.catch si capta un error
promesa
    .then((promesaResuelta)=>{
        console.log("se procede a borrar los usuarios")
    })
    .catch(()=>{
        console.warn("no hay usuarios");
    })
    .finally(()=>{
        console.log("proceso finalizado");
    })


console.timeEnd("prod")
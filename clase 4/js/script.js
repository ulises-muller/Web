// for(let counter = 1; counter <=100; counter++){
//     console.log("iteracion numero " + counter)
// }
// !realizar un script que pida un valor >= 0 y empezando desde el 1 que indeque todos los nros divisibles por 3
let numero = prompt("ingrese numero: ");
if(numero >= 1){
    for(let i = 1 ; i <= numero; i++){
        if (i % 3 === 0) {
            console.log(`el numero ${i} es divisible por 3`)        
        }
    }
}else{
    alert("ingrese un numero valido")
}
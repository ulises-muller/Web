const paises = [
    'Argentina',
    'brasil',
    'bolivia',
    'chile',
    'colombia',
    'ecuador',
    'guayana',
    'paraguay',
    'peru',
    'surinam',
    'uruguay',
    'venezuela',
    'mexico',
    'costa rica',
    'cuba', //14
]

//! metodo 1

// for (let i = 0; i < paises.length; i++) {
//     console.log(`${i+1} - ${paises[i]}`)   
// }

// for(let i = paises.length - 1; i >=0 ; i--){
//     console.log(`${paises.length - i } - ${paises[i]}`)
// }

// //!metodo 2

// for(let pais of paises){
//     console.log(pais)
// }

//!metodo 3

// paises.forEach(function(pais, indice, arrayOriginal){
//     console.log(pais, indice);
// })

//!ejercicio: recorrer el array y guardar en uno nuevo los paises que tengan letra "a"

let paisesA = []

for(let pais of paises){
    if (pais.toLocaleLowerCase().includes("v")){
        paisesA.push(pais);
    }
}
console.log(paisesA)
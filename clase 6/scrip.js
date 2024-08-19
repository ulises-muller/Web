const users = [{
    fullname: 'John Doe',
    age: 30,
    email: 'admin@admin.com',
    id: '1',
    active: true,
    password: 'admin',
    bornDate: 725846400000,
    location: 'La Luna',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
    role: 'ADMIN_ROLE'
},{
fullname: 'jej Doe',
age: 30,
email: 'admin@admin.com',
id: '4',
active: true,
password: 'admin',
bornDate: 725846400000,
location: 'La Luna',
image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
role: 'ADMIN_ROLE'
},
{
    fullname: 'pofo Doe',
    age: 30,
    email: 'admin@admin.com',
    id: '3',
    active: true,
    password: 'admin',
    bornDate: 725846400000,
    location: 'La Luna',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
    role: 'ADMIN_ROLE'
    },
    {
        fullname: 'dolfo Doe',
        age: 30,
        email: 'admin@admin.com',
        id: '2',
        active: false,
        password: 'admin',
        bornDate: 725846400000,
        location: 'La Luna',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
        role: 'ADMIN_ROLE'
        }]

// users.forEach(function(user, indice) {
//     console.log(user,indice)
//     let numeracion
//     if(indice < 10){
//         numeracion = "0" + indice;
//     } else{
//         numeracion = indice;
//     }
// });
//!para crear un array nuevo modificadon uno anterior
// const usuariosFinal = users.map(function(usurio){
//     const usuarioModificada = {
//         name2: usurio.fullname.toUpperCase(),
//         edad: usurio.age + 1
//     }
//     return usuarioModificada
// })
// console.log(usuariosFinal)
// //!Filter recorre toda la lista
// const usersFiltrados = users.filter(function(persona){
//     if (persona.active){
//         return true
//     } else {
//         return false
//     }
// })
// console.log(usersFiltrados)

//! find - corta cuando encuentra al primero
const userEncontrado = users.find((persona) =>{
    if(persona.fullname === 'pofo Doe'){
        return true
    }
})
//! find index- devuelve solo el indice
const userEncontradoIdx = users.findIndex((persona) =>{
    if(persona.fullname === 'pofo Doe'){
        return true
    }
})
console.log(userEncontrado)
console.log(userEncontradoIdx)
//! Splice - el primer numero es el indice y el segundo la cantidad de que
//!          de que queres borrar
users.splice(2, 1)
console.log(users)
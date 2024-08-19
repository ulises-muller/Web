const url = 'https://665e417b1e9017dc16ef7651.mockapi.io/products'
const traerHTML = document.querySelector(".traer")

// const productos1 = axios.get(url)
//     .then(respuesta => {
//         return respuesta.data})
//     .catch(error => console.log(error))

// async function get3(){
//     const producto = await productos1
//     producto.forEach(producto => {
//         traerHTML.innerHTML +=`nombre : ${producto.name} <br>`    
//     });
// }

// async function get2(){
//     try{
//         const respuesta = await axios.get(url)
//         const productos = respuesta.data
//         productos.forEach(producto => {
//             traerHTML.innerHTML +=`nombre : ${producto.name} <br>`    
//         });
//     } catch(error){
//         alert(error)
//     }
// }


async function traerProductos(){
    const productos2 = await axios.get(url)
    console.log(productos2.data);
    productos2.data.forEach(producto => {
        traerHTML.innerHTML +=`nombre : ${producto.name} <br>`    
    });
}
traerProductos()
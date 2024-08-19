localStorage.setItem("userName", JSON.stringify("Jonh Doe"))
localStorage.setItem("eat", JSON.stringify(21354123))
const user = localStorage.getItem("userName")
// alert("bienvenido"+ user)

console.log(localStorage.getItem("eat"))
console.log(JSON.parse(localStorage.getItem("eat")))

localStorage.removeItem("userName")

localStorage.clear()

//* carrito de compras

const products = [{
    name: "PS5",
    price: 123412
},{
    name:"XBOX",
    price: 21345
}]
//*Permanece aunque cierre la session/pestaña
localStorage.setItem("carritoAbandonado", JSON.stringify(products))

const productsLocalStorage = JSON.parse(localStorage.getItem("carritoAbandonado"))

console.log(productsLocalStorage)
// la informacion persiste mientras la pestaña donde lo cree 
//*no permanece despues del cierre de session/pestaña
sessionStorage.setItem("usuario", "webo"
    
)

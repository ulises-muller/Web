const productsURL = 'https://fakestoreapi.com/products'
const dolar = 1000
fetch(productsURL) //voy a pescar y traigo tantos productos
    //fetch devuelve una cadena no un json por eso hay que usar .json
    .then((respuesta)=> respuesta.json()) // es obligatio
        .then((respuestaJson)=>{
                console.log(respuestaJson)
                pintarProductos(respuestaJson)
            })
            .catch((error)=>{
                console.log("error en el fetch", error)
            })
function pintarProductos(productos){

    const productWrapperHTML = document.querySelector('#product-wrapper')
    productWrapperHTML.innerHTML = ""

    productos.forEach(producto => {
        //diseñar una tarjeta en css y pegarla aca
        productWrapperHTML.innerHTML += `
                                        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                            <div class="card shadow w-100">
                                                <img class="card-img-top card-image" src="${producto.image}" alt="${producto.title}">
                                                <div class="card-text">
                                                    <h5 class="card-title card-main-title" title="${producto.title}">${producto.title}</h5>
                                                    <p class="card-text">
                                                        ${producto.description}
                                                    </p>
                                                    <h5 class="text-primary text-center">
                                                        ${parseInt(producto.price * dolar)}
                                                    </h5>
                                                    <a href="" class="btn btn-primary">Ver detalles</a>
                                                </div>
                                            </div>
                                        </div>
                                        `
    });
}
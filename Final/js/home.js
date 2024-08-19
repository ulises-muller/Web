const URL = 'https://665e417b1e9017dc16ef7651.mockapi.io/products'
const tbodyHTML = document.querySelector(".tarjetas")

async function productsObtenidos(){
    try {
        const productGet = await axios.get(URL)
        const product = productGet.data
        return product        
    } catch (error) {
        Swal.fire(error)
    }
}

function renderProducts(Products) {
    try {
        tbodyHTML.innerHTML = ''
        Products.forEach(producto => {
                tbodyHTML.innerHTML += `
                                    <div class="tarjeta col">
                                        <div class="card">
                                        <img src="${producto.image}" class="card-img-top" alt="${producto.name}">
                                        <div class="card-body">
                                            <h5 class="card-title">${producto.name}</h5>
                                            <p class="card-text">${producto.description}</p>
                                        </div>
                                        <div class="card-footer text-center">
                                            <small class="text-body-secondary">$${producto.price}</small>
                                        </div>
                                        </div>
                                    </div>
                                    `
        });
    } catch (error) {
        Swal.fire("error");
    }
    
}

async function renderStart(){
    try {
        renderProducts(await productsObtenidos())
    } catch (error) {
        Swal.fire(error)
    }
}

renderStart()

async function inputSearch(a){
    const search = a.target.value.toLowerCase()
    const products = await productsObtenidos()
    const finterProduct = products.filter((product) => {
        if(product.name.toLowerCase().includes(search)){
            return true
        }
        return false
    })
    renderProducts(finterProduct)
}
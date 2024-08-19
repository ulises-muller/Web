const URL = 'https://665e417b1e9017dc16ef7651.mockapi.io/products'
const formHTML = document.querySelector("#product-form")
const tbodyHTML = document.querySelector("#table-body")
let isEditing

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
        resetForm()
        tbodyHTML.innerHTML = ''
        Products.forEach(producto => {
            let date
            if (producto.date){
                date = transformTimestampToDate(producto.date)
            }
            tbodyHTML.innerHTML += `
                                <tr>
                                    <td class="product-image ocultar">
                                        <img src="${producto.image}" alt="${producto.name} avatar"></td>
                                    <td style="font-weight:bold;">${producto.name}</td>
                                    <td>${producto.description}</td>
                                    <td class="ocultar">${producto.category}</td>
                                    <td>$${producto.price}</td>
                                    <td class="ocultar">${date}</td>
                                    <td class="user-actions">
                                        <button class="btn btn-danger btn-sm mt-1" onclick=delProduct(${producto.id})> <i class="fa-solid fa-trash"></i></button>
                                        <button class="btn btn-primary btn-sm mt-1" onclick=editProduct(${producto.id})><i class="fa-solid fa-pencil"></i></button>
                                    </td>
                                </tr>
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

formHTML.addEventListener("submit", evento =>{
    evento.preventDefault()
    const el = evento.target.elements
    const nuevoProducto = {
        name: el.name.value,
        description: el.description.value,
        category: el.category.value,
        price: el.price.value,
        date: new Date().getTime(),
        image: el.image.value
    }
    if (isEditing) {
        editarProduct(nuevoProducto)
        formHTML.elements = null
    } else {createProduct(nuevoProducto)}
    
})

async function createProduct(producto){
    try {
        await axios.post(URL, producto)
        renderProducts(await productsObtenidos())
    } catch (error) {
        Swal.fire("error");
    }
}

async function productMod(producto){
    try {
        await axios.put(`${URL}/${isEditing}`, producto)
        renderProducts(await productsObtenidos())
        isEditing = undefined
    } catch (error) {
        Swal.fire("error");
    }
}

async function deleteProduct(id){
    try {
        await axios.delete(`${URL}/${id}`)
        renderProducts(await productsObtenidos())
    } catch (error) {
        Swal.fire("error");
    }
}
async function editProduct(id){
    const idString = id.toString()
    try {
        isEditing = idString

        const editGet = await axios.get(`${URL}/${idString}`)
        const edit = editGet.data
        const el = formHTML.elements

        el.name.value = edit.name
        el.description.value = edit.description
        el.category.value = edit.category
        el.price.value = edit.price
        el.image.value = edit.image
    } catch (error) {
        Swal.fire("error");
    }
}

async function sortDesc(){
    const product = await productsObtenidos()
    product.sort((a,b) => a.price - b.price )
    renderProducts(product)
}

async function sortAsc(){
    const product = await productsObtenidos()
    product.sort((a,b) => b.price - a.price )
    renderProducts(product)
}

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

function transformTimestampToDate(dateTimeStamp){
    const dateFormat = new Intl.DateTimeFormat("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
        })
    const offset = new Date().getTimezoneOffset() * 60 * 1000;
    dateTimeStamp += offset;
    const date = dateFormat.format(dateTimeStamp)
    return date
}

function resetForm() {
    const el = formHTML.elements
    el.image.value = null
    el.name.value = null
    el.description.value = null
    el.category.value = null
    el.price.value = null
}

//!SweetAlert2
//lo de abajo alerta de eliminar
function delProduct(id){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success"
          });
          deleteProduct(id)
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your product is safe :)",
            icon: "error"
          });
        }
      });
}
//alerta modificar
function editarProduct(nuevoProducto){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, edit it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Edited!",
            text: "Your product has been edit.",
            icon: "success"
          });
          productMod(nuevoProducto)
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your product is safe :)",
            icon: "error"
          });
        }
      });
}


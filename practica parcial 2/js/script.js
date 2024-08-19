const URL = 'https://665e417b1e9017dc16ef7651.mockapi.io/products'
const tbodyHTML = document.querySelector("#tbody")
const formHTML = document.querySelector("#user-form")
let isEditing
async function renderUsers(){
    try{
    const usersGet = await axios.get(URL)
    const users = usersGet.data
    tbodyHTML.innerHTML = ''
    users.forEach(user => {
        tbodyHTML.innerHTML += `
                                <tr>
                                    <td>${user.nombre}</td>
                                    <td>${user.edad}</td>
                                    <td>${user.ciudad}</td>
                                    <td>
                                        <button type="button" onclick=deleteUser(${user.id})>Borrar</button>
                                        <button type="button" onclick=editUser(${user.id})>Editar</button>
                                    </td>
                                    
                                </tr>       
    
        `
    });
}catch (error){
    console.log(error);
}
}
formHTML.addEventListener("submit", evento =>{
    evento.preventDefault()
    const el = evento.target.elements
    const nuevoUsuario = {
        nombre: el.fullname.value,
        edad: el.edad.value,
        ciudad: el.ciudad.value
    }
    if (isEditing) {
        agregarUsuarioMod(nuevoUsuario)
        isEditing = undefined
    } else {
        agregarUsuario(nuevoUsuario)
        isEditing = undefined
    }
})
async function agregarUsuario(user){
    try {
        await axios.post(URL, user)
        renderUsers()
    } catch (error) {
        console.log(error);
    }
}
async function agregarUsuarioMod(user){
    try {
        await axios.put(`${URL}/${isEditing}`, user)
        renderUsers()
    } catch (error) {
        console.log(error);
    }
}
async function deleteUser(id){
    try {
        await axios.delete(`${URL}/${id}`)
        renderUsers()
    } catch (error) {
        console.log(error)
    }
}
async function editUser(id){
    isEditing = id
    const userGet = await axios.get(`${URL}/${id}`)
    const user = userGet.data
    const el = formHTML.elements
    el.fullname.value = user.nombre
    el.edad.value = user.edad
    el.ciudad.value = user.ciudad
}
renderUsers()